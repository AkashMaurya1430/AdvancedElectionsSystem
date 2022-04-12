import React from "react";
import VoterAuth from "./voterAuth/voterAuth";
import WebcamCapture from "./WebCam/WebCam";
import "./Vote.css";
import Candidates from "./Candidates/Candidates";

const Vote = () => {
  const [step, setStep] = React.useState(1);
  const [voterData, setVoterData] = React.useState();
  const [capturedVoterImage, setCapturedVoterImage] = React.useState(null);

  return (
    <>
      <main className="vote">
        <h4 className="pageTitle mb-1">Voting Section</h4>
        <p className="pageSubTitle mb-4">Follow the steps to cast your vote</p>
        {step === 1 ? (
          <VoterAuth setVoterData={setVoterData} setStep={setStep} />
        ) : // else
        step === 2 ? (
          <WebcamCapture
            setStep={setStep}
            capturedVoterImage={capturedVoterImage}
            setCapturedVoterImage={setCapturedVoterImage}
          />
        ) : 
        // else
        step === 3 && voterData ? (
          <Candidates voterData={voterData} />
        ) : (
          <>
            <VoterAuth setVoterData={setVoterData} setStep={setStep} />
          </>
        )}
      </main>
    </>
  );
};

export default Vote;
