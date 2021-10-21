import React from "react";
import Masonry from "react-masonry-css";
import * as Routes from "../../Routes";
import "./Campaigns.css";

const Campaigns = () => {
  const breakpointColumnsObj = {
    default: 3,
    992: 2,
    578: 1,
  };
  return (
    <>
      <main className="campaigns">
        <h4 className="pageTitle mb-1">All Campaigns</h4>

        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          <div className="campaign">
            <div className="d-flex align-items-center campaignHeader">
              <img src="https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg" alt="" />
              <h6 className="ms-2">
                <a href={Routes.eachCandidate}>Lorem Ipsum</a>
              </h6>
            </div>
            <h6 className="campaignTitle mt-2">Lorem ipsum dolor sit amet consectetur.</h6>
            <img
              src="https://i2.wp.com/covidnews.eurocities.eu/wp-content/uploads/2020/04/Budapest-poster-COVID19.png?fit=1024%2C1024&ssl=1"
              alt=""
              className="campaignImage"
            />
            <p className="campaignBody">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate ducimus consequuntur perferendis expedita delectus officia
              molestias unde dignissimos optio quod magnam soluta laboriosam a, beatae minus sunt. Consequuntur, aliquam? olestias unde dignissimos
              optio quod magnam soluta laboriosam a, beatae minus sunt. Consequuntur, aliquam?
            </p>
            <div className="campaignFooter">
              <span className="cursor-pointer">
                <a className="p-0" href={Routes.eachCampaign}>
                  Readmore
                </a>
              </span>{" "}
              <span className="ps-2 position-relative">3 min read</span>
            </div>
          </div>
        </Masonry>
      </main>
    </>
  );
};

export default Campaigns;
