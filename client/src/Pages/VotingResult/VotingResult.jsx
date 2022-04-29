import React from "react";

import "./VotingResult.css";
import Progress from "../../Components/Progressbar/Progressbar";
import Votes from "../../Components/EachCandidateVote/EachCandidateVote";
import { getAxios } from "../../Helpers/axios";
import { toast } from "react-toastify";

const VotingResult = () => {
  const [votes, setVotes] = React.useState([]);
  const [voters, setVoters] = React.useState([]);
  const [candidates, setCandidates] = React.useState([]);

  React.useEffect(() => {
    const getVotes = async () => {
      try {
        let axiosJWT = getAxios();
        await axiosJWT
          .get(`/admin/votes`)
          .then((response) => {
            // console.log(response);
            if (response.data.status) {
              // toast.success(response.data.message);
              setVotes(response.data.data.votes);
              setVoters(response.data.data.voters);
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
    };

    getVotes();
  }, []);

  return (
    <>
      <main className="votingResult">
        <h4 className="pageTitle mb-1">Voting Results</h4>
        <Progress done={Math.ceil(votes.length / voters.length)} />
        <hr className="partition"></hr>

        {candidates.map((candidate) => {
          
          return (
            <div className="votes col-12 col-md-6 mt-3 mt-md-4">
              <div className="result">
                <h5>{candidate.name}</h5>
                <Votes
                  value={
                    votes.filter(
                      (vote) => vote.candidateId._id === candidate._id
                    ).length*10
                  }
                />
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default VotingResult;
