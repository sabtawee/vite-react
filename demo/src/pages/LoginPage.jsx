import React from "react";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/jquery/jquery.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "admin-lte/dist/js/adminlte.min.js";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [fname, setFname] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const response = await axios.post(`http://localhost:5000/api/login`, {
      f_name: fname,
      password: password,
    });
    if (response.data != "") {
      let result = response['data'][0];
      console.log(result.member_id);
      Swal.fire("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("fname", JSON.stringify(fname));
        localStorage.setItem("member_id", JSON.stringify(result.member_id));
        window.location.href = "/home";
      });
    } else {
      Swal.fire("Failed", response.message, "error");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Admin</b>LTE
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={(e) => setFname(e.target.value)}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <button
                  type="submit"
                  onClick={login}
                  className="btn btn-success btn-block"
                >
                  Sign In
                </button>
              </div>

              <div className="col-4">
                <Link to="/register" className="btn btn-primary btn-block">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
