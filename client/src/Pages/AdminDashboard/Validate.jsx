import React from "react";
import { Modal } from "react-bootstrap";
import { baseURL } from "../../Constants";
import { toast } from "react-toastify";
import { getAxios } from "../../Helpers/axios";
import { useHistory } from "react-router";
import * as Routes from "../../Routes";
const axios = require("axios");

const Validate = ({ show, handleModal, userData, userType }) => {
  const history = useHistory();

  const approveCandidate = async () => {
    let axiosJWT = getAxios();

    const body = {
      candidateId: userData._id,
    };

    await axiosJWT
      .post(`/admin/approveCandidate`, body)
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
  };

  const approveVoter = async () => {
    let axiosJWT = getAxios();

    const body = {
      voterId: userData._id,
    };

    await axiosJWT
      .post(`/admin/approveVoter`, body)
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
  };

  return (
    <>
      <Modal show={show} animation={true} className="p-0">
        <Modal.Body className="px-3">
          <h4 className="fw-bold d-flex align-items-center justify-content-between mb-3">
            Verify User
            <i
              class="bx bx-x cursor-pointer"
              onClick={() => {
                handleModal();
              }}
            ></i>
          </h4>

          <div className="mb-3 d-flex align-items-center ">
            <p className="fw-bold">Profile Photo :</p>
            <img
              alt="Profile Pic"
              className="ms-3"
              src={userData.profilePic}
              style={{ width: "5rem", height: "5rem", borderRadius: "50%" }}
            />
          </div>

          <div className="mb-3 d-flex align-items-center ">
            <p className="fw-bold">Full Name :</p>
            <p className="ms-3">{userData.name}</p>
          </div>

          {/* <div className="mb-3 d-flex align-items-center ">
              <p className="fw-bold">Email :</p>
              <p className="ms-3">{userData.userId.email}</p>
            </div> */}

          <div className="mb-3 d-flex align-items-center ">
            <p className="fw-bold">Phone :</p>
            <p className="ms-3">{userData.contact}</p>
          </div>

          <div className="mb-3 d-flex align-items-center ">
            <p className="fw-bold">DOB :</p>
            <p className="ms-3">{new Date(userData.dob).toDateString()}</p>
          </div>

          {userType === "Candidates" ? (
            <>
              <div className="mb-3 d-flex align-items-center ">
                <p className="fw-bold">Highest Education :</p>
                <p className="ms-3">BE in I.T</p>
              </div>

              <div className="mb-3 d-flex align-items-center ">
                <p className="fw-bold">Social Links:</p>
                <p className="ms-3">
                  <div className="candidateSocialLinks m-0 align-items-center d-flex">
                    {userData.socials && (
                      <a
                        href={userData.socials.twitter}
                        target="_blank"
                        rel="noreferrer noopennor"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        <i class="bx bxl-twitter"></i>
                      </a>
                    )}
                    {userData.socials && (
                      <a
                        href={userData.socials.instagram}
                        target="_blank"
                        rel="noreferrer noopennor"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        <i class="bx bxl-instagram-alt"></i>
                      </a>
                    )}
                    {userData.socials && (
                      <a
                        href={userData.socials.facebook}
                        target="_blank"
                        rel="noreferrer noopennor"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        <i class="bx bxl-facebook"></i>
                      </a>
                    )}
                  </div>
                </p>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="text-center mt-4">
            <button
              className="btn btn-success"
              onClick={() => {
                userType === "Candidates" ? approveCandidate() : approveVoter();
              }}
            >
              {" "}
              Verify
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Validate;
