import React from "react";
import * as Routes from "../../../../Routes";
import { toast } from "react-toastify";

const VoterAuth = () => {
  const [formData, setFormData] = React.useState();

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     let form = document.getElementById("loginForm");
  //     form.classList.add("was-validated");

  //     if (form.checkValidity() === false) {
  //       event.preventDefault();
  //       event.stopPropagation();
  //       return;
  //     } else {
  //       axios
  //         .post(`${baseURL}/login`, formData)
  //         .then((response) => {
  //           console.log(response);
  //           if (response.data.status) {
  //             window.localStorage.setItem(
  //               "profile",
  //               JSON.stringify(response.data.data)
  //             );
  //             toast.success(response.data.message);
  //             if (response.data.data.role === "Voter") {
  //               history.push(Routes.voterEditProfile);
  //             } else if (response.data.data.role === "Candidate") {
  //               history.push(Routes.candidateEditProfile);
  //             } else if (response.data.data.role === "Admin") {
  //               history.push(Routes.adminDashboard);
  //             }
  //           } else {
  //             toast.error(response.data.message);
  //           }
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           toast.error("Internal Server Error");
  //         });
  //     }
  //   };
  return (
    <>
      <div className="voterAuthForm">
        <form
          // onSubmit={}
          className="loginForm mt-5  needs-validation"
          id="loginForm"
          noValidate
        >
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
            <input
              type="password"
              class="form-control"
              id="loginPassword"
              name="password"
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              value={formData ? formData.password : ""}
              required
            />
            <div class="invalid-feedback mb-2">Please enter password</div>
          </div>

          <div className="mb-3 text-center">
            <button type="submit" className="btn loginBtn">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default VoterAuth;
