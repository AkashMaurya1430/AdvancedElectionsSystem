import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getAxios } from "../../Helpers/axios";

import "./EachCampaign.css";

const EachCampaign = () => {
  const { campaignId } = useParams();
  const [campaign, setCampaign] = React.useState({});

  React.useEffect(() => {
    async function getCampaignData() {
      try {
        let axiosJWT = getAxios();
        await axiosJWT
          .get(`/campaign/${campaignId}`)
          .then((response) => {
            // console.log(response);
            if (response.data.status) {
              // toast.success(response.data.message);
              setCampaign(response.data.data);
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
    getCampaignData();
  }, []);
  return (
    <>
      <main className="eachCampaignPage">
        <h3 className="text-center mx-auto  campaignTitle">{campaign.title}</h3>
        <div className="campaignAuthor d-flex">
          <img
            src={campaign.createdBy && campaign.createdBy.profilePic}
            alt=""
          />
          <div className="ms-2">
            <h6 className="campaignAuthorName mt-2 mb-1 text-start">
              {campaign.createdBy && campaign.createdBy.name}
            </h6>
            <p className="campaignDetails text-muted">
              <span>{new Date(campaign.createdAt).toDateString()}</span>{" "}
              <span className="ps-2 position-relative">3 min read</span>{" "}
            </p>
          </div>
          <div className="candidateSocialLinks d-none d-md-block ">
            {campaign.createdBy && (
              <a
                href={campaign.createdBy.socials.twitter}
                target="_blank"
                rel="noreferrer noopennor"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <i class="bx bxl-twitter"></i>
              </a>
            )}
            {campaign.createdBy && (
              <a
                href={campaign.createdBy.socials.instagram}
                target="_blank"
                rel="noreferrer noopennor"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <i class="bx bxl-instagram-alt"></i>
              </a>
            )}
            {campaign.createdBy && (
              <a
                href={campaign.createdBy.socials.facebook}
                target="_blank"
                rel="noreferrer noopennor"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <i class="bx bxl-facebook"></i>
              </a>
            )}
          </div>
        </div>
        <div className="text-center">
          <img src={campaign.image} alt="" className="campaignImage mx-auto" />
        </div>
        <div className="container mt-4 fw-bold">{campaign.body} </div>
      </main>
    </>
  );
};

export default EachCampaign;
