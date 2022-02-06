import React from "react";
import { Modal } from "react-bootstrap";
import { baseURL } from "../../Constants";
import {toast} from 'react-toastify'
import { useHistory } from "react-router";
import * as Routes from "../../Routes";

const axios = require("axios");

const Register = ({ show, handleModal }) => {
  const history = useHistory()
  const [formData, setFormData] = React.useState({ type: "Voter" });

  const handleSubmit = (event) => {
    event.preventDefault();

    let form = document.getElementById("registerForm");
    form.classList.add("was-validated");

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    } else {
      console.log(formData);

      axios
        .post(`${baseURL}/signup`, formData)
        .then((response) => {
          console.log(response);
          if(response.data.status){
            toast.success(response.data.message)
            handleModal();
            if(formData.type === "Voter"){
              history.push(Routes.voterEditProfile)
            } else if(formData.type === "Candidate"){
              history.push(Routes.candidateEditProfile)
            }
          } else{
            toast.error(response.data.message)
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error('Internal Server Error')
        });
    }
  };

  return (
    <>
      <Modal show={show} animation={true} className="p-0">
        <Modal.Body className="px-4">
          <h3 className="d-flex align-items-center justify-content-between">
            Create your account{" "}
            <i
              class="bx bx-x cursor-pointer"
              onClick={() => {
                handleModal();
              }}
            ></i>
          </h3>

          <form onSubmit={handleSubmit} className="loginForm mt-5  needs-validation" id="registerForm" noValidate>
            <div class="mb-3">
              <label for="loginEmail" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData ? formData.email : ""}
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
                value={formData ? formData.type : ""}
                name="type"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
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
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData ? formData.password : ""}
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

export default Register;
