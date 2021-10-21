import React from "react";
import { NavLink } from "react-router-dom";
import * as Routes from "../../Routes";
import "./Candidate.css";
const Candidates = () => {
  return (
    <>
      <div className="col-12 col-md-4 mt-3 mt-md-4">
        <div className="candidate card">
          <img src="https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg" alt="" className="candidateImage" />
          <div className="candidateSocials">
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-instagram-alt"></i>
            <i class="bx bxl-facebook"></i>
          </div>
          <NavLink to={Routes.eachCandidate} className="candidateName mt-2 mb-1 h5">
            Lorem Ipsum
          </NavLink>{" "}
          <p className="candidatesHighestEdu">B Tech in Information Technology</p>
        </div>
      </div>

      <div className="col-12 col-md-4 mt-3 mt-md-4">
        <div className="candidate card">
          <img src="https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg" alt="" className="candidateImage" />
          <div className="candidateSocials">
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-instagram-alt"></i>
            <i class="bx bxl-facebook"></i>
          </div>
          <NavLink to={Routes.eachCandidate} className="candidateName mt-2 mb-1 h5">
            Lorem Ipsum
          </NavLink>{" "}
          <p className="candidatesHighestEdu">B Tech in Information Technology</p>
        </div>
      </div>
      <div className="col-12 col-md-4 mt-3 mt-md-4">
        <div className="candidate card">
          <img src="https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg" alt="" className="candidateImage" />
          <div className="candidateSocials">
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-instagram-alt"></i>
            <i class="bx bxl-facebook"></i>
          </div>
          <NavLink to={Routes.eachCandidate} className="candidateName mt-2 mb-1 h5">
            Lorem Ipsum
          </NavLink>
          <p className="candidatesHighestEdu">B Tech in Information Technology</p>
        </div>
      </div>
      <div className="col-12 col-md-4 mt-3 mt-md-4">
        <div className="candidate card">
          <img src="https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg" alt="" className="candidateImage" />
          <div className="candidateSocials">
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-instagram-alt"></i>
            <i class="bx bxl-facebook"></i>
          </div>
          <NavLink to={Routes.eachCandidate} className="candidateName mt-2 mb-1 h5">
            Lorem Ipsum
          </NavLink>{" "}
          <p className="candidatesHighestEdu">B Tech in Information Technology</p>
        </div>
      </div>
      <div className="col-12 col-md-4 mt-3 mt-md-4">
        <div className="candidate card">
          <img src="https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg" alt="" className="candidateImage" />
          <div className="candidateSocials">
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-instagram-alt"></i>
            <i class="bx bxl-facebook"></i>
          </div>
          <NavLink to={Routes.eachCandidate} className="candidateName mt-2 mb-1 h5">
            Lorem Ipsum
          </NavLink>{" "}
          <p className="candidatesHighestEdu">B Tech in Information Technology</p>
        </div>
      </div>
    </>
  );
};

export default Candidates;
