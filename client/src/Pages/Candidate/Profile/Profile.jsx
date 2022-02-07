import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Profile.css";
import { baseURL } from "../../../Constants";
import { getAxios } from "../../../Helpers/axios";
import { toast } from "react-toastify";
let FormData = require("form-data");

const Profile = () => {
  
  const [formData, setFormData] = React.useState({
    profilePic: "",
    name: "",
    contact: "",
    dob: "",
    about: "",
    highestEducation: "",
  });
  const [agendas, setAgendas] = useState();
  const [showAgendaModal, setShowAgendaModal] = useState(false);

  const [imgUrl, setImageUrl] = React.useState();
  const imgInput = React.useRef();

  React.useEffect(() => {
    async function fetchData() {
      let axiosJWT = getAxios();
      await axiosJWT
        .get("/candidate/myDetails")
        .then((response) => {
          console.log(response);
          if (response.status) {
            setFormData({
              name: response.data.data.role.name ? response.data.data.role.name : "",
              contact: response.data.data.role.contact ? response.data.data.role.contact : "",
              about: response.data.data.role.about ? response.data.data.role.about : "",
              highestEducation: response.data.data.role.highestEducation ? response.data.data.role.highestEducation : "",
              dob: response.data.data.role.dob ? new Date(response.data.data.role.dob).toISOString().substr(0, 10) : "",
              email: response.data.data ? response.data.data.email : "",
              twitter: response.data.data.role.socials && response.data.data.role.socials.twitter ? response.data.data.role.socials.twitter : "",
              instagram:
                response.data.data.role.socials && response.data.data.role.socials.instagram ? response.data.data.role.socials.instagram : "",
              facebook: response.data.data.role.socials && response.data.data.role.socials.facebook ? response.data.data.role.socials.facebook : "",
            });
            setAgendas(response.data.data.role.electionAgendas)
            setImageUrl(
              response.data.data.role.profilePic
                ? response.data.data.role.profilePic
                : "https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg"
            );
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

  function addNewAgenda(event) {
    let agendaTitle = document.getElementById("newAgendaTitle").value;
    let agendaDesc = document.getElementById("newAgendaDesc").value;
    event.preventDefault();

    var form = document.getElementById("addNewAgendaModal");
    form.classList.add("was-validated");

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      let newAgenda = {
        title: agendaTitle,
        description: agendaDesc,
      };
      setAgendas((agendas) => [...agendas, newAgenda]);
      console.log(agendas);
      setShowAgendaModal(false);
    }
  }

  const deleteAgenda = (indexToremove) => {
    setAgendas(agendas.filter((_, index) => index !== indexToremove));
  };

  const submitProfileData = async () => {
    if (formData.name === "" || formData.contact === "" || formData.about === "" || formData.highestEducation === "" || formData.dob === "") {
      return toast.warn("Please fill basic info.");
    }

    let form = new FormData();
    form.append("name", formData.name);
    form.append("contact", formData.contact);
    form.append("dob", formData.dob);
    form.append("about", formData.about);
    form.append("highestEducation", formData.highestEducation);
    if (formData.profilePic) {
      form.append("profilePic", formData.profilePic);
    } else {
      form.append("profilePic", imgUrl);
    }
    console.log(formData.twitter);
    if (formData.twitter) {
      form.append("twitter", formData.twitter);
    }
    if (formData.instagram) {
      form.append("instagram", formData.instagram);
    }
    if (formData.facebook) {
      form.append("facebook", formData.facebook);
    }

    if (agendas.length) {
      form.append("agendas", JSON.stringify(agendas));
    }

    try {
      let axiosJWT = getAxios();
      await axiosJWT
        .post(`/candidate/editProfile`, form)
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
          <div className="row mx-0 mt-4 justify-content-center">
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
                required
              />

              <i
                class="bx bxs-pencil editProfilePic"
                onClick={() => {
                  imgInput.current.click();
                }}
              ></i>
            </div>{" "}
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
                required
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
                placeholder="Contact"
                name="contact"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData ? formData.contact : ""}
                required
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
                required
              />
            </div>

            {/* Highest Education  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="highestEducation" className="form-label">
                Highest Education <span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="highestEducation"
                placeholder=""
                name="highestEducation"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData ? formData.highestEducation : ""}
                required
              />
            </div>

            {/* About  */}
            <div className="mb-3 col-12 ">
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
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div className="socialProfileContainer mt-4">
          <h5>Social Profiles</h5>
          <div className="row mt-3">
            {/* Twitter  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="twitterLink" className="form-label">
                Twitter
              </label>
              <input
                type="url"
                className="form-control"
                id="twitterLink"
                placeholder="Twitter profile "
                name="twitter"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData ? formData.twitter : ""}
              />
            </div>

            {/* Instagram  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="instagramLink" className="form-label">
                Instagram
              </label>
              <input
                type="url"
                className="form-control"
                id="instagramLink"
                placeholder="instagram profile "
                name="instagram"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData ? formData.instagram : ""}
              />
            </div>

            {/* Facebook  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="facebookLink" className="form-label">
                Facebook
              </label>
              <input
                type="url"
                className="form-control"
                id="facebookLink"
                placeholder="Facebook profile "
                name="facebook"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData ? formData.facebook : ""}
              />
            </div>
          </div>
        </div>

        <div className="agendasContainer mt-4">
          <h5 className="d-flex justify-content-between align-items-center">
            <span>Election Agendas</span>{" "}
            <span
              className="ms-auto d-flex align-items-center cursor-pointer"
              onClick={() => {
                setShowAgendaModal(true);
              }}
            >
              <i className="bx bx-plus" style={{ marginTop: "3px" }}></i> <span> New Agenda</span>
            </span>
          </h5>

          {agendas ? (
            <>
              <div className="row">
                {agendas.map((agenda, i) => (
                  <div className="agenda mt-3">
                    <h6 className="agendaTitle d-flex justify-content-between align-items-center">
                      {agenda.title}{" "}
                      <i
                        className="bx bx-trash mt-2 text-danger  cursor-pointer"
                        onClick={() => {
                          deleteAgenda(i);
                        }}
                      ></i>
                    </h6>
                    <p className="agendaDesc m-0">{agenda.description}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="text-center mt-4">
          <button
            className="btn profileSaveButton"
            onClick={() => {
              submitProfileData();
            }}
          >
            Save
          </button>
        </div>
      </main>

      {/* Add Agenda Modal  */}
      <Modal show={showAgendaModal}>
        <Modal.Header>
          <Modal.Title className="d-flex justify-content-between  align-items-center w-100">
            <span>Create New Agenda</span>{" "}
            <i
              className="bx bx-x cursor-pointer"
              onClick={() => {
                setShowAgendaModal(false);
              }}
            ></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="addNewAgendaModal" action="" className="needs-validation" onSubmit={addNewAgenda}>
            <div className="mb-3 col-12  ">
              <label htmlFor="newAgendaTitle" className="form-label">
                Agenda Title
              </label>
              <input type="text" className="form-control" id="newAgendaTitle" placeholder="Title" required />
            </div>

            <div className="mb-3 col-12  ">
              <label htmlFor="newAgendaDesc" className="form-label">
                Agenda Desc
              </label>
              <textarea name="" id="newAgendaDesc" className="form-control" placeholder="Write a few words about your agenda" required></textarea>
            </div>
            <div className="col-12 text-end">
              <button
                className="btn btn-secondary me-3"
                onClick={() => {
                  setShowAgendaModal(false);
                }}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Add Agenda
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Profile;
