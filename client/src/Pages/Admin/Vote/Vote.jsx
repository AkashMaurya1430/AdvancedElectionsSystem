import React from "react";
import VoterAuth from "./voterAuth/voterAuth";
import WebcamCapture from './WebCam/WebCam'
import "./Vote.css";
import Candidates from "./Candidates/Candidates";

const Vote = () => {
  const [step, setStep] = React.useState(3);
  const [voterData,setVoterData] = React.useState()
  const [capturedVoterImage, setCapturedVoterImage] = React.useState(null);

  return (
    <>
      <main className="vote">
        <h4 className="pageTitle mb-1">Voting Section</h4>
        <p className="pageSubTitle mb-4">Follow the steps to cast your vote</p>
        {step === 1 ? <VoterAuth setVoterData={setVoterData} setStep={setStep}/> : ""}

        {step === 2 ? <WebcamCapture setStep={setStep} capturedVoterImage={capturedVoterImage} setCapturedVoterImage={setCapturedVoterImage}/> : ""}

        {step === 3 ? <Candidates/> : ""}

      </main>
    </>
  );
};

export default Vote;
