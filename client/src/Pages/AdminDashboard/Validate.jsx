import React from "react";
import { Modal } from "react-bootstrap";
import { baseURL } from "../../Constants";
import {toast} from 'react-toastify'
import { useHistory } from "react-router";
import * as Routes from "../../Routes";

const axios = require("axios");

const Validate = ({ show, handleModal }) => {
  const history = useHistory()
  

 

  return (
    <>
      <Modal show={show} animation={true} className="p-0">
        <Modal.Body className="px-4">
          <h3 className="d-flex align-items-center justify-content-between">
            Validate{" "}
            <i
              class="bx bx-x cursor-pointer"
              onClick={() => {
                handleModal();
              }}
            ></i>
          </h3>

          <form className="loginForm mt-5  needs-validation" id="registerForm" noValidate>
            <div class="mb-3">
              <label for="loginEmail" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="loginEmail"
                placeholder="name@example.com"
                required
              />

              <div class="invalid-feedback">Please enter email</div>
            </div>

            <div class="mb-3">
              <label for="validationCustom04" class="form-label">
                Type
              </label>
              <select
                class="form-select"
                id="validationCustom04"
                
                required
              >
                <option selected>Voter</option>
                <option>Candidate</option>
              </select>
            </div>

            <div class="mb-4">
              <label for="loginPassword" class="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                
                class="form-control"
                id="loginPassword"
                required
              />
              <div class="invalid-feedback">Please enter password</div>
            </div>

            <div className="text-center">
              <button className="btn loginBtn">Register</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Validate;
