import React, { useRef } from "react";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
const LOGIN_URL = "/auth/login";

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const { setAuth } = useAuth();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userName: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      //   console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.token;
      const role = response?.data?.role;
      setAuth({ user, pwd, role, accessToken });
      console.log(auth);
      localStorage.setItem("auth", JSON.stringify({ user, role, accessToken }));
      setPwd("");
      setUser("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("no server respond");
      } else if (err.response?.status === 403) {
        setErrMsg("wrong username or password");
      } else {
        setErrMsg("login failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <br />
        <button>Sign in</button>
      </form>
    </section>
  );
}

export default Login;
