import axios from "axios";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpass, setConpass] = useState("");

  const Register = async () => {
    if (
      fname == "" &&
      lname == "" &&
      email == "" &&
      password == "" &&
      conpass == ""
    ) {
      return <RegisterPage />;
    }
    if (password != conpass) {
      Swal.fire("Failed", "password", "error");
      window.location.href = "/register";
    } else {
      const response = await axios.post(`http://localhost:5000/api/register`, {
        f_name: fname,
        l_name: lname,
        password: password,
        email: email,
      });
      console.log(response.data)
      Swal.fire("Register Success", "success", "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        window.location.href = "/login";
      });;
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <div className="register-logo">
          <a href="">
            <b>Admin</b>LTE
          </a>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={(e) => setFname(e.target.value)}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={(e) => setLname(e.target.value)}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Retype password"
                onChange={(e) => setConpass(e.target.value)}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="terms"
                    defaultValue="agree"
                  />
                  <label htmlFor="agreeTerms">
                    I agree to the <a>terms</a>
                  </label>
                </div>
              </div>
              <div className="col-4">
                <button
                  onClick={Register}
                  className="btn btn-primary btn-block"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          {/* /.form-box */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
}
