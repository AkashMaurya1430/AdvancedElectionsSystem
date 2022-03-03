import React from "react";
import { NavLink } from "react-router-dom";
import * as Routes from "../../Routes";
import "./Candidate.css";
const Candidates = ({ candidate }) => {
  return (
    <>
      <div className="col-12 col-md-4 mt-3 mt-md-4">
        <div className="candidate card">
          <img src={candidate.profilePic} alt="" className="candidateImage" />
          <div className="candidateSocials">
            {candidate.socials && (
              <a
                href={candidate.socials.twitter}
                target="_blank"
                rel="noreferrer noopennor"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <i class="bx bxl-twitter"></i>
              </a>
            )}
            {candidate.socials && (
              <a
                href={candidate.socials.instagram}
                target="_blank"
                rel="noreferrer noopennor"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <i class="bx bxl-instagram-alt"></i>
              </a>
            )}
            {candidate.socials && (
              <a
                href={candidate.socials.facebook}
                target="_blank"
                rel="noreferrer noopennor"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <i class="bx bxl-facebook"></i>
              </a>
            )}
          </div>
          <NavLink
            to={`/candidate/${candidate._id}`}
            className="candidateName mt-2 mb-1 h5"
          >
            {candidate.name}
          </NavLink>{" "}
          <p className="candidatesHighestEdu">
            {candidate.highestEducation}
          </p>
        </div>
      </div>
    </>
  );
};

export default Candidates;