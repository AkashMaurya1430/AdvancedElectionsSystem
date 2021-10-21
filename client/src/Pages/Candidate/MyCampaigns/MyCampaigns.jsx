import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { Modal } from "react-bootstrap";
import "./MyCampaigns.css";

const MyCampaigns = () => {
  const [showAddNewCampaignModal, setShowAddNewCampaignModal] = useState(false);

  const breakpointColumnsObj = {
    default: 4,
    992: 3,
    578: 1,
  };

  function addNewCampaign(event) {
    event.preventDefault();

    var form = document.getElementById("addNewCampaignForm");
    form.classList.add("was-validated");

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setShowAddNewCampaignModal(false);
    }
  }
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

        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          <div className="campaign">
            <img
              src="https://www.squareyards.com/blog/wp-content/uploads/2021/09/Square-Yards-OOH-campaign.jpeg"
              alt=""
              className="campaignImage m-0"
            />

            <h6 className="campaignTitle mt-2">Lorem ipsum dolor sit amet consectetur.</h6>

            <div className="campaignFooter mt-1 d-flex justify-content-between">
              <span className="cursor-pointer">Monday, 4th October 2021 </span>{" "}
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

          <div className="campaign">
            <img
              src="https://www.squareyards.com/blog/wp-content/uploads/2021/09/Square-Yards-OOH-campaign.jpeg"
              alt=""
              className="campaignImage m-0"
            />

            <h6 className="campaignTitle mt-2">Lorem ipsum dolor sit amet consectetur.</h6>

            <div className="campaignFooter mt-1 d-flex justify-content-between">
              <span className="cursor-pointer">Monday, 4th October 2021 </span>{" "}
              <span>
                <i
                  className="bx bx-trash text-danger fs-6 cursor-pointer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Delete Campaign"
                ></i>
              </span>
            </div>
          </div>
          <div className="campaign">
            <img
              src="https://www.squareyards.com/blog/wp-content/uploads/2021/09/Square-Yards-OOH-campaign.jpeg"
              alt=""
              className="campaignImage m-0"
            />

            <h6 className="campaignTitle mt-2">Lorem ipsum dolor sit amet consectetur.</h6>

            <div className="campaignFooter mt-1 d-flex justify-content-between">
              <span className="cursor-pointer">Monday, 4th October 2021 </span>{" "}
              <span>
                <i
                  className="bx bx-trash text-danger fs-6 cursor-pointer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Delete Campaign"
                ></i>
              </span>
            </div>
          </div>
          <div className="campaign">
            <h6 className="campaignTitle mt-2">Lorem ipsum dolor sit amet consectetur.</h6>

            <div className="campaignFooter mt-1 d-flex justify-content-between">
              <span className="cursor-pointer">Monday, 4th October 2021 </span>{" "}
              <span>
                <i
                  className="bx bx-trash text-danger fs-6 cursor-pointer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Delete Campaign"
                ></i>
              </span>
            </div>
          </div>
          <div className="campaign">
            <img
              src="https://www.squareyards.com/blog/wp-content/uploads/2021/09/Square-Yards-OOH-campaign.jpeg"
              alt=""
              className="campaignImage m-0"
            />

            <h6 className="campaignTitle mt-2">Lorem ipsum dolor sit amet consectetur.</h6>

            <div className="campaignFooter mt-1 d-flex justify-content-between">
              <span className="cursor-pointer">Monday, 4th October 2021 </span>{" "}
              <span>
                <i
                  className="bx bx-trash text-danger fs-6 cursor-pointer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Delete Campaign"
                ></i>
              </span>
            </div>
          </div>
          <div className="campaign">
            <h6 className="campaignTitle mt-2">Lorem ipsum dolor sit amet consectetur.</h6>

            <div className="campaignFooter mt-1 d-flex justify-content-between">
              <span className="cursor-pointer">Monday, 4th October 2021 </span>{" "}
              <span>
                <i
                  className="bx bx-trash text-danger fs-6 cursor-pointer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Delete Campaign"
                ></i>
              </span>
            </div>
          </div>
          <div className="campaign">
            <h6 className="campaignTitle mt-2">Lorem ipsum dolor sit amet consectetur.</h6>

            <div className="campaignFooter mt-1 d-flex justify-content-between">
              <span className="cursor-pointer">Monday, 4th October 2021 </span>{" "}
              <span>
                <i
                  className="bx bx-trash text-danger fs-6 cursor-pointer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Delete Campaign"
                ></i>
              </span>
            </div>
          </div>
          <div className="campaign">
            <img
              src="https://www.squareyards.com/blog/wp-content/uploads/2021/09/Square-Yards-OOH-campaign.jpeg"
              alt=""
              className="campaignImage m-0"
            />

            <h6 className="campaignTitle mt-2">Lorem ipsum dolor sit amet consectetur.</h6>

            <div className="campaignFooter mt-1 d-flex justify-content-between">
              <span className="cursor-pointer">Monday, 4th October 2021 </span>{" "}
              <span>
                <i
                  className="bx bx-trash text-danger fs-6 cursor-pointer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Delete Campaign"
                ></i>
              </span>
            </div>
          </div>
        </Masonry>
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
          <form id="addNewCampaignForm" action="" className="needs-validation" onSubmit={addNewCampaign}>
            <div className="mb-2 col-12  ">
              <label htmlFor="newCampaignTitle" className="form-label">
                Campaign Title <span>*</span>
              </label>
              <input type="text" className="form-control" id="newCampaignTitle" placeholder="Title" required />
            </div>

            <div className="mb-2 col-12  ">
              <label htmlFor="newCampaignDesc" className="form-label">
                Campaign Body <span>*</span>
              </label>
              <textarea name="" id="newCampaignDesc" className="form-control" placeholder="Write a few words about your campaign" required></textarea>
            </div>

            <div className="mb-3 col-12  ">
              <label htmlFor="newCampaignImage" className="form-label">
                Campaign Image
              </label>

              <input class="form-control" type="file" id="newCampaignImage" accept="image/*" />
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
