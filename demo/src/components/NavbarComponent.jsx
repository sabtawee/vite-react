import React from "react";
import Swal from "sweetalert2";

export default function NavbarComponent() {
  const fname = JSON.parse(localStorage.getItem("fname"));
  const member_id = JSON.parse(localStorage.getItem("member_id"));

  const logout = () => {
    Swal.fire("Success", "Logout Success", "success", {
      buttons: false,
      timer: 2000,
    }).then((value) => {
      localStorage.removeItem("fname");
      localStorage.removeItem("member_id");
      window.location.href = "/";
    });
  };

  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="index3.html" className="nav-link">
              Home
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
