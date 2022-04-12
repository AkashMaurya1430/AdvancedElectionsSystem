import React from "react";
import { toast } from "react-toastify";
import { getAxios } from "../../../../Helpers/axios";

const Candidates = (props) => {
  const [candidates, setCandidates] = React.useState([]);

  React.useEffect(() => {
    async function getCandidates() {
      try {
        let axiosJWT = getAxios();
        await axiosJWT
          .get(`/admin/getCandidates`)
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

  const castVote = async(candidateId) => {
    try {
      let axiosJWT = getAxios();
      let body = {
        candidateId,
        voterId:props.voterData.role._id
      };

      await axiosJWT
        .post(`/admin/castVote`, body)
        .then((response) => {
          // console.log(response);
          if (response.data.status) {
            toast.success(response.data.message);
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
      toast.error("Faild to cast vote, please try again");
    }
  };

  return (
    <>
      <h5>Select a candidate from below and click the button to vote.</h5>

      <div className="adminCandidates row">
        {candidates.length &&
          candidates.map((candidate) => {
            return (
              <>
                <div className="col-12 col-sm-6 col-md-4 mt-3 mt-md-4">
                  <div class="card flex-row p-3">
                    <img
                      src={candidate.profilePic}
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="d-flex justify-content-around flex-column">
                      <h5 class="card-title">{candidate.name}</h5>
                      <div className="text-center mt-3">
                        <button
                          className="btn btn-success mx-auto"
                          onClick={() => {
                            castVote(candidate._id);
                          }}
                        >
                          Vote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Candidates;
