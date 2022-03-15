import React from "react";
import VoterAuth from "./voterAuth/voterAuth";
import "./Vote.css";

const Vote = () => {
  const [step, setStep] = React.useState(1);

  return (
    <>
      <main className="vote">
        <h4 className="pageTitle mb-1">Voting Section</h4>
        <p className="pageSubTitle mb-4">Follow the steps to cast your vote</p>
        {step === 1 ? <VoterAuth /> : ""}

        {/* {step === 1 ? <VoterAuth /> : ""} */}

        {/* {step === 1 ? <VoterAuth /> : ""} */}
      </main>
    </>
  );
};

export default Vote;
