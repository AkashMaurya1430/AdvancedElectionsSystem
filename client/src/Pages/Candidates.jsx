import React from "react";
import { getAxios } from "../Helpers/axios";
import { toast } from "react-toastify";
import Candidate from "../Components/Candidate/Candidate";

const CandidatesPage = () => {
  const [candidates, setCandidates] = React.useState([]);

  React.useEffect(() => {
    async function getCandidates() {
      try {
        let axiosJWT = getAxios();
        await axiosJWT
          .get(`/candidates`)
          .then((response) => {
            // console.log(response);
            if (response.data.status) {
              // toast.success(response.data.message);
              setCandidates(response.data.data.candidates);
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
    getCandidates();
  }, []);

  return (
    <>
      <main>
        <h4 className="pageTitle">Candidates</h4>

        <div className="candidates row ">
          {candidates.length ? (
            candidates.map((candidate) => {
              return <Candidate candidate={candidate} />;
            })
          ) : (
            <>
              <h5>No candidates Found</h5>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default CandidatesPage;
