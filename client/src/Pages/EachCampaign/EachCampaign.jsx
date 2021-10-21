import React from "react";
import "./EachCampaign.css";

const EachCampaign = () => {
  return (
    <>
      <main className="eachCampaignPage">
        <h3 className="text-center mx-auto  campaignTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, similique?</h3>
        <div className="campaignAuthor d-flex">
          <img src="https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg" alt="" />
          <div className="ms-2">
            <h6 className="campaignAuthorName mt-2 mb-1 text-start">Lorem, ipsum dolor.</h6>
            <p className="campaignDetails text-muted">
              <span>Oct 11,2021</span> <span className="ps-2 position-relative">3 min read</span>{" "}
            </p>
          </div>
          <div className="candidateSocialLinks d-none d-md-block ">
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-instagram-alt"></i>
            <i class="bx bxl-facebook"></i>
          </div>
        </div>
        <div className="text-center">
          <img
            src="https://i2.wp.com/covidnews.eurocities.eu/wp-content/uploads/2020/04/Budapest-poster-COVID19.png?fit=1024%2C1024&ssl=1"
            alt=""
            className="campaignImage mx-auto"
          />
        </div>
        <div className="container mt-4 fw-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta aliquam dolores doloremque doloribus praesentium itaque laboriosam culpa
          magni odit maxime sequi, impedit cupiditate facere, optio perferendis tempora? Autem ullam fugiat quas magni quisquam, esse libero! Eos
          iusto excepturi in. Modi eligendi totam libero saepe ullam alias suscipit delectus laborum amet quo reiciendis enim ipsam repellendus
          recusandae non, debitis asperiores culpa similique sequi at accusamus obcaecati, quos accusantium distinctio. Nemo pariatur, excepturi a
          ullam quis ipsum aliquam repellat tempore corrupti at voluptatibus sunt ipsa iste accusamus dolorum dicta fugiat odio libero cupiditate
          veniam optio soluta. Ab vero inventore totam itaque ipsa!
        </div>
      </main>
    </>
  );
};

export default EachCampaign;
