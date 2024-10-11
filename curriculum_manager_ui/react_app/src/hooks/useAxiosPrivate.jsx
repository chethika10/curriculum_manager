import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useAxiosPrivate = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const http = axiosPrivate.create({
    baseURL: "http://localhost:8080",
    headers: {
      Authorization: `Bearer ${auth?.accessToken}`,
      "Access-Control-Allow-Origin": "http://localhost:8080",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    withCredentials: false,
  });

  //   useEffect(() => {
  //     const requestIntercept = axiosPrivate.interceptors.request.use(
  //       (config) => {
  //         if (config.headers["Authorization"]) {
  //           config.headers["Authorization"] = "Bearer " + auth?.accessToken;
  //           //   console.log("Bearer " + auth?.accessToken);
  //         }
  //         return config;
  //       },
  //       (error) => Promise.reject(error)
  //     );
  //     return () => {
  //       axiosPrivate.interceptors.request.eject(requestIntercept);
  //     };
  //   }, [auth]);

  return http;
};

export default useAxiosPrivate;
