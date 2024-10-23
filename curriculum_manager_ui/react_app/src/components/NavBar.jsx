import React from "react";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const { auth } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" >
          Curriculum manager
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {auth?.user}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item">
                    {auth?.user} - {auth?.role}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    change password
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item">
                    <button type="button" class="btn btn-outline-danger">
                      logout
                    </button>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
