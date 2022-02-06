import React from "react";
import "./Profile.css";
import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "../../../Constants";
import axiosJWT from "../../../Helpers/axios";
let FormData = require("form-data");

const Profile = () => {
  const [formData, setFormData] = React.useState({
    profilePic: "",
    name: "",
    contact: "",
    dob: "",
    // about: "",
  });
  const [imgUrl, setImageUrl] = React.useState("https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg");
  const imgInput = React.useRef();

  React.useEffect(() => {
    async function fetchData() {
      await axiosJWT
        .get("/voter/myDetails")
        .then((response) => {
          console.log(response);
          if (response.status) {
            setFormData({
              name: response.data.data.role.name,
              contact: response.data.data.role.contact,
              dob: new Date(response.data.data.role.dob).toISOString().substr(0, 10),
              email: response.data.data.email,
            });
            setImageUrl(response.data.data.role.profilePic);
          }
        })
        .catch((e) => {
          console.log(e);
          toast.error("Failed to fetch info");
        });
    }
    fetchData();
  }, []);

  const handleFileInput = (e) => {
    console.log(e);
    if (e.target.files.length > 0) {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    }
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async () => {
    if (formData.profilePic === "" || formData.name === "" || formData.contact === "" || formData.dob === "") {
      toast.warn("All Fields are mandatory.");
      return;
    }

    let form = new FormData();
    form.append("name", formData.name);
    form.append("contact", formData.contact);
    form.append("dob", formData.dob);
    // form.append("about", formData.about);
    if (formData.profilePic) {
      form.append("profilePic", formData.profilePic);
    } else {
      form.append("profilePic", imgUrl);
    }

    try {
      await axiosJWT
        .post(`/voter/editProfile`, form)
        .then((response) => {
          console.log(response);
          if (response.data.status) {
            toast.success(response.data.message);
          } else {
            toast.error(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error.response);
          toast.error(error.response.data.message);
        });
    } catch (e) {
      console.log(e);
      toast.error("Faild to update, please try again");
    }
  };

  return (
    <>
      <main>
        <h4 className="pageTitle mb-1">Profile</h4>
        <p className="pageSubTitle">Manage your personal info and contact information.</p>

        <div className="basicInfoContainer mt-4">
          <h5>Basic Info</h5>
          <div className="row mx-0 mt-4 justify-content-center ">
            <div className="mx-auto w-auto position-relative">
              <img src={imgUrl} alt="" className="profileImage" />
              <input
                type="file"
                className="profileImageInput"
                ref={imgInput}
                accept="image/*"
                name="profilePic"
                onChange={(e) => {
                  handleFileInput(e);
                }}
              />
              <i
                class="bx bxs-pencil editProfilePic"
                onClick={() => {
                  imgInput.current.click();
                }}
              ></i>
            </div>
          </div>

          <div className="row mt-3">
            {/* Name  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="fullName" className="form-label">
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Full Name"
                name="name"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData ? formData.name : ""}
              />
            </div>

            {/* Contact  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number <span>*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="contactNumber"
                placeholder=""
                name="contact"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData ? formData.contact : ""}
              />
            </div>

            {/* Email ID  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="emailID" className="form-label">
                Email ID <span>*</span>
              </label>
              <input type="email" className="form-control" id="emailID" placeholder="" value={formData ? formData.email : ""} disabled />
            </div>

            {/* DOB  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="dob" className="form-label">
                DOB <span>*</span>
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                placeholder=""
                name="dob"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData ? formData.dob : ""}
              />
            </div>

            {/* Highest Education 
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="highestEducation" className="form-label">
                Highest Education <span>*</span>
              </label>
              <input type="text" className="form-control" id="highestEducation" placeholder="" />
            </div> */}

            {/* About  */}
            {/* <div className="mb-3 col-12 ">
              <label htmlFor="about" className="form-label">
                About <span>*</span>
              </label>
              <textarea
                id="about"
                className="form-control"
                name="about"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData ? formData.about : ""}
              ></textarea>
            </div> */}
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            className="btn profileSaveButton"
            onClick={() => {
              handleSubmit();
            }}
          >
            Save
          </button>
        </div>
      </main>
    </>
  );
};

export default Profile;
