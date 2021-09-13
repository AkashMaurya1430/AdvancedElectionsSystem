import React from "react";
import { Modal } from "react-bootstrap";

const Register = ({ show, handleModal }) => {
  return (
    <>
      <Modal show={show} animation={true} className="p-0">
        <Modal.Body>
          <h3 className="d-flex align-items-center justify-content-between">
            Create your account{" "}
            <i
              class="bx bx-x cursor-pointer"
              onClick={() => {
                handleModal();
              }}
            ></i>
          </h3>

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
            </div>

            <div className="mb-3 text-center">
              <button type="submit" className="btn loginBtn">
                Register
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Register;
