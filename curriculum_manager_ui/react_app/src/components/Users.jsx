import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import axios from "../api/axios";
const Users = () => {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/user/getall", {
          signal: controller.signal,
        });
        // const response = await axios.get(
        //   "/user/getall",
        //   // JSON.stringify({ userName: user, password: pwd }),
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization:
        //         "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJTYWhhbiIsImlhdCI6MTcyODcxOTY0NCwiZXhwIjoxNzI4ODA2MDQ0fQ.f4lk40koy1hbSr0zRD-6mSuxy5UNw0hOl0Fv4QpqG0X0gCg3VeLCtSqI0tt7qmXj",
        //     },
        //     withCredentials: true,
        //   }
        // );
        console.log(response.data);
        // console.log(response);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user[1]}</li>
          ))}
        </ul>
      ) : (
        <p>no users</p>
      )}
    </article>
  );
};

export default Users;
