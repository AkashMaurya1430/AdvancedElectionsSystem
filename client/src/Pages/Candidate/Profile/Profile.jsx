import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Profile.css";

const Profile = () => {
  const agenda = [
    {
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolores eum tempore numquam et cum,",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolores eum tempore numquam et cum,",
    },
  ];
  const [agendas, setAgendas] = useState(agenda);
  const [showAgendaModal, setShowAgendaModal] = useState(false);

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
        desc: agendaDesc,
      };
      setAgendas((agendas) => [...agendas, newAgenda]);
      console.log(agendas);
      setShowAgendaModal(false);
    }
  }

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

        <div className="socialProfileContainer mt-4">
          <h5>Social Profiles</h5>
          <div className="row mt-3">
            {/* Twitter  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="twitterLink" className="form-label">
                Twitter
              </label>
              <input type="url" className="form-control" id="twitterLink" placeholder="Twitter profile " />
            </div>

            {/* Instagram  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="instagramLink" className="form-label">
                Instagram
              </label>
              <input type="url" className="form-control" id="instagramLink" placeholder="instagram profile " />
            </div>

            {/* Facebook  */}
            <div className="mb-3 col-12 col-sm-6 col-lg-4 ">
              <label htmlFor="facebookLink" className="form-label">
                Facebook
              </label>
              <input type="url" className="form-control" id="facebookLink" placeholder="Facebook profile " />
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
                      {agenda.title} <i className="bx bx-trash mt-2 text-danger  cursor-pointer"></i>
                    </h6>
                    <p className="agendaDesc m-0">{agenda.desc}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="text-center mt-4">
          <button className="btn profileSaveButton">Save</button>
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
