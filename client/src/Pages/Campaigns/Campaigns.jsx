import React from "react";
import Masonry from "react-masonry-css";
import * as Routes from "../../Routes";
import { getAxios } from "../../Helpers/axios";
import { toast } from "react-toastify";
import "./Campaigns.css";

const Campaigns = () => {
  const [myCampaigns, setMyCampaigns] = React.useState([]);

  const breakpointColumnsObj = {
    default: 3,
    992: 2,
    578: 1,
  };

  React.useEffect(() => {
    async function getCampaigns() {
      try {
        let axiosJWT = getAxios();
        await axiosJWT
          .get(`/campaigns`)
          .then((response) => {
            // console.log(response);
            if (response.data.status) {
              // toast.success(response.data.message);
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
    getCampaigns();
  }, []);

  return (
    <>
      <main className="campaigns">
        <h4 className="pageTitle mb-1">All Campaigns</h4>
        {myCampaigns.length ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {myCampaigns.map((campaign) => {
              return (
                <div className="campaign">
                  <div className="d-flex align-items-center campaignHeader">
                    <img src={campaign.createdBy.profilePic} alt="" />
                    <h6 className="ms-2">
                      <a href={Routes.eachCandidate}>
                        {campaign.createdBy.name}
                      </a>
                    </h6>
                  </div>
                  <h6 className="campaignTitle mt-3">{campaign.body}</h6>
                  {campaign.image ? (
                    <img
                      src={campaign.image}
                      alt=""
                      className="campaignImage"
                    />
                  ) : (
                    ""
                  )}
                  <p className="campaignBody">{campaign.body}</p>
                  <div className="campaignFooter">
                    <span className="cursor-pointer">
                      <a className="p-0" href={`/campaign/${campaign._id}`}>
                        Readmore
                      </a>
                    </span>{" "}
                    <span className="ps-2 position-relative">3 min read</span>
                  </div>
                </div>
              );
            })}
          </Masonry>
        ) : (
          <>
            <h5 className="mt-3">No campaigns found</h5>
          </>
        )}
      </main>
    </>
  );
};

export default Campaigns;
