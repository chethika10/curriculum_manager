import React from "react";
import NavBar from "../components/NavBar";

function LecturerHome() {
  return (
    <div className="back">
      <NavBar />
      Lecturer Home
      <br/>
      <br />
      <button type="button" class="btn btn-outline-dark">
        Modules
      </button>
      <br />
    </div>
  );
}

export default LecturerHome;
