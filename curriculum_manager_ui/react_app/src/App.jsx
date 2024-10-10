import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Module from "./Screens/module";
import Login from "./Screens/Login";
import AdminHome from "./Screens/AdminHome";
import LecturerHome from "./Screens/LecturerHome";
import StudentHome from "./Screens/StudentHome";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public */}
        <Route path="login" element={<Login />} />
        <Route path="/" element={<StudentHome />} />
        {/* protected */}
        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="AdminHome" element={<AdminHome />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["LECTURER"]} />}>
          <Route path="LecturerHome" element={<LecturerHome />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
