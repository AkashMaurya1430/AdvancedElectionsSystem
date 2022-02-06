import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from "../Register/Register";
import Logo from "../Images/logo.png";
import { baseURL } from "../../Constants";
import { toast } from "react-toastify";
import "./Login.css";
const axios = require("axios");

const Login = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [formData, setFormData] = React.useState();

  function hideRegisterModal() {
    setShowRegisterModal(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let form = document.getElementById("loginForm");
    form.classList.add("was-validated");

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    } else {

      axios
        .post(`${baseURL}/login`, formData)
        .then((response) => {
          console.log(response);
          if (response.data.status) {
            toast.success(response.data.message);
          } else {
            toast.error(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Internal Server Error");
        });
    }
  };
  return (
    <>
      <div className="login">
        <div className="leftContainer">
          <div className="header w-100 d-flex align-items-center flex-md-row flex-column">
            <div className="col-auto p-0">
              <img src={Logo} alt="" />
            </div>
            <div className="col ms-md-2">
              <h2 className="mb-0 mt-md-0 mt-2">Voter Portal</h2>
              <span>Every Vote Counts</span>
            </div>
          </div>
          <div className="content">
            <h1>SIES Graduate School of Technology</h1>
            <ul className="mt-4">
              <li>Enroll To Vote</li>
              <li>Enroll To Vote</li>
              <li>Enroll To Vote</li>
              <li>Enroll To Vote</li>
              <li>Enroll To Vote</li>
            </ul>
          </div>
        </div>
        <div className="rightContainer">
          <h2>Login</h2>
          <h5 className="fw-normal" style={{ fontSize: "1.1rem" }}>
            Don't have an account?{" "}
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                setShowRegisterModal(true);
              }}
            >
              Create one
            </Link>
          </h5>
          <form onSubmit={handleSubmit} className="loginForm mt-5  needs-validation" id="loginForm" noValidate>
            <div class="mb-3">
              <label for="loginEmail" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="loginEmail"
                placeholder="name@example.com"
                name="email"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData ? formData.email : ""}
                required
              />
              <div class="invalid-feedback">Please enter email</div>

            </div>

            <div class="mb-4">
              <label for="loginPassword" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="loginPassword"
              name="password"
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              value={formData ? formData.password : ""}
              required />
              <div class="invalid-feedback mb-2">Please enter password</div>

              <Link>Forgot Password?</Link>
            </div>

            <div className="mb-3 text-center">
              <button type="submit" className="btn loginBtn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Register show={showRegisterModal} handleModal={hideRegisterModal} />
    </>
  );
};

export default Login;
