import React from "react";
import Webcam from "react-webcam";
import { toast } from "react-toastify";

const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    props.setCapturedVoterImage(imageSrc);
  }, [webcamRef, props.setCapturedVoterImage]);

  return (
    <>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture photo</button>
      {props.capturedVoterImage && <img src={props.capturedVoterImage} />}

      <button
        className="btn btn-secondary d-block mt-3"
        onClick={() => {
          if (props.capturedVoterImage) {
            props.setStep(3);
          } else {
            toast.warn("Please Capture your Image");
          }
        }}
      >
        {" "}
        Save
      </button>
    </>
  );
};

export default WebcamCapture;
