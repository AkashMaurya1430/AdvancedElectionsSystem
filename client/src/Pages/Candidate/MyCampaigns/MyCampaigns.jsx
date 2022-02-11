import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { Modal } from "react-bootstrap";
import { getAxios } from "../../../Helpers/axios";
import { toast } from "react-toastify";
import "./MyCampaigns.css";

let FormData = require("form-data");

const MyCampaigns = () => {
  const [showAddNewCampaignModal, setShowAddNewCampaignModal] = useState(false);

  const [createCampaignFormData, setCreateCampaignFormData] = useState();

  const [myCampaigns, setMyCampaigns] = useState([]);

  const breakpointColumnsObj = {
    default: 4,
    992: 3,
    578: 1,
  };

  React.useEffect(() => {
    async function getMyCampaigns() {
      try {
        let axiosJWT = getAxios();
        await axiosJWT
          .get(`/candidate/mycampaigns`)
          .then((response) => {
            console.log(response);
            if (response.data.status) {
              toast.success(response.data.message);
              setMyCampaigns(response.data.data.campaigns);
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
    }
    getMyCampaigns();
  }, []);

  async function addNewCampaign(event) {
    event.preventDefault();
    var form = document.getElementById("addNewCampaignForm");
    form.classList.add("was-validated");

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      let form = new FormData();
      form.append("title", createCampaignFormData.title);
      form.append("body", createCampaignFormData.body);
      if (createCampaignFormData.image) {
        form.append("image", createCampaignFormData.image);
      }

      try {
        let axiosJWT = getAxios();
        await axiosJWT
          .post(`/candidate/addCampaign`, form)
          .then((response) => {
            console.log(response);
            if (response.data.status) {
              toast.success(response.data.message);
              setShowAddNewCampaignModal(false);
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
    }
  }

  const handleFileInput = (e) => {
    console.log(e);
    if (e.target.files.length > 0) {
      setCreateCampaignFormData({
        ...createCampaignFormData,
        [e.target.name]: e.target.files[0],
      });
    }
  };

  return (
    <>
      <main>
        <h4 className="pageTitle mb-1">My Campaigns</h4>
        <p className="pageSubTitle">Manage your campaigns.</p>

        <div className="mt-3">
          <button
            className="btn addNewCampaignBtn ms-auto"
            onClick={() => {
              setShowAddNewCampaignModal(true);
            }}
          >
            <i className="bx bx-plus me-1"></i> New Campaign
          </button>
        </div>
        {myCampaigns.length ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {myCampaigns.map((campaign) => {
              return (
                <div className="campaign">
                  {campaign.image ? (
                    <>
                      <img
                        src={campaign.image}
                        alt=""
                        className="campaignImage m-0"
                      />
                    </>
                  ) : (
                    ""
                  )}

                  <h6 className="campaignTitle mt-2">{campaign.title}</h6>

                  <div className="campaignFooter mt-1 d-flex justify-content-between">
                    <span className="cursor-pointer">
                      {new Date(campaign.createdAt).toDateString()}{" "}
                    </span>{" "}
                    <span>
                      <i
                        className="bx bx-trash text-danger fs-6 cursor-pointer "
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete Campaign"
                      ></i>
                    </span>
                  </div>
                </div>
              );
            })}
          </Masonry>
        ) : (
          <>
            <h4>No campaigns found</h4>
          </>
        )}
      </main>

      {/* Add New Campaign Modal  */}
      <Modal show={showAddNewCampaignModal}>
        <Modal.Header>
          <Modal.Title className="d-flex justify-content-between  align-items-center w-100">
            <span>Create New Campaign</span>
            <i
              className="bx bx-x cursor-pointer"
              onClick={() => {
                setShowAddNewCampaignModal(false);
              }}
            ></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="addNewCampaignForm"
            action=""
            className="needs-validation"
            onSubmit={addNewCampaign}
          >
            <div className="mb-2 col-12  ">
              <label htmlFor="newCampaignTitle" className="form-label">
                Campaign Title <span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="newCampaignTitle"
                placeholder="Title"
                name="title"
                onChange={(e) => {
                  setCreateCampaignFormData({
                    ...createCampaignFormData,
                    [e.target.name]: e.target.value,
                  });
                }}
                value={
                  createCampaignFormData ? createCampaignFormData.title : ""
                }
                required
              />
            </div>

            <div className="mb-2 col-12  ">
              <label htmlFor="newCampaignDesc" className="form-label">
                Campaign Body <span>*</span>
              </label>
              <textarea
                id="newCampaignDesc"
                className="form-control"
                placeholder="Write a few words about your campaign"
                name="body"
                onChange={(e) => {
                  setCreateCampaignFormData({
                    ...createCampaignFormData,
                    [e.target.name]: e.target.value,
                  });
                }}
                value={
                  createCampaignFormData ? createCampaignFormData.body : ""
                }
                required
              ></textarea>
            </div>

            <div className="mb-3 col-12  ">
              <label htmlFor="newCampaignImage" className="form-label">
                Campaign Image
              </label>

              <input
                class="form-control"
                type="file"
                id="newCampaignImage"
                accept="image/*"
                name="image"
                onChange={(e) => {
                  handleFileInput(e);
                }}
              />
            </div>
            <div className="col-12 text-end">
              <button
                className="btn btn-secondary me-3"
                onClick={() => {
                  setShowAddNewCampaignModal(false);
                }}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create Campaign
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyCampaigns;
