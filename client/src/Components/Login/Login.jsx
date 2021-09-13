import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from "../Register/Register";
import "./Login.css";

const Login = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  function hideRegisterModal() {
    setShowRegisterModal(false);
  }

  return (
    <>
      <div className="login">
        <div className="leftContainer">
          <div className="header w-100">
            <h2>Voter Portal</h2>
          </div>
          <div className="content">
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
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
          <form className="loginForm mt-5  needs-validation">
            <div class="mb-3">
              <label for="loginEmail" class="form-label">
                Email address
              </label>
              <input type="email" class="form-control" id="loginEmail" placeholder="name@example.com" required />
            </div>

            <div class="mb-4">
              <label for="loginPassword" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="loginPassword" required />
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
