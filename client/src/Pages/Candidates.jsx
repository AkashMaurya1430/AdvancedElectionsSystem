import React from "react";
import Candidate from "../Components/Candidate/Candidate";

const CandidatesPage = () => {
  return (
    <>
      <main>
        <h4 className="pageTitle">Candidates</h4>

        <div className="candidates row ">
          <Candidate />
        </div>
      </main>
    </>
  );
};

export default CandidatesPage;
