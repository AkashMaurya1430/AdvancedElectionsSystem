import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <main>
        <h4 className="pageTitle mb-1">Profile</h4>
        <p className="pageSubTitle">Manage your personal info and contact information.</p>

        <div className="basicInfoContainer mt-4">
          <h5>Basic Info</h5>
          <div className="row mx-0 mt-4 justify-content-center">
            <img src="https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg" alt="" className="profileImage" />
          </div>

          <div className="row mt-3">
            {/* Name  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="fullName" className="form-label">
                Full Name <span>*</span>
              </label>
              <input type="text" className="form-control" id="fullName" placeholder="" />
            </div>

            {/* Contact  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number <span>*</span>
              </label>
              <input type="number" className="form-control" id="contactNumber" placeholder="" />
            </div>

            {/* Email ID  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="emailID" className="form-label">
                Email ID <span>*</span>
              </label>
              <input type="email" className="form-control" id="emailID" placeholder="" />
            </div>

            {/* DOB  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="dob" className="form-label">
                DOB <span>*</span>
              </label>
              <input type="date" className="form-control" id="dob" placeholder="" />
            </div>

            {/* Highest Education  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="highestEducation" className="form-label">
                Highest Education <span>*</span>
              </label>
              <input type="text" className="form-control" id="highestEducation" placeholder="" />
            </div>

            {/* About  */}
            <div className="mb-3 col-12 ">
              <label htmlFor="about" className="form-label">
                About <span>*</span>
              </label>
              <textarea name="" id="about" className="form-control"></textarea>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn profileSaveButton">Save</button>
        </div>
      </main>
    </>
  );
};

export default Profile;
