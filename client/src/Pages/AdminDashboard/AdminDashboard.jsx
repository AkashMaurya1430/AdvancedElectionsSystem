import React, { useState } from "react";
import { useHistory } from "react-router";
import Validate from "./Validate";
import { toast } from "react-toastify";
import { getAxios } from "../../Helpers/axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const history = useHistory();
  const [showValidateModal, setShowValidateModal] = useState(false);
  const [formData, setFormData] = React.useState();
  const [candidates, setCandidates] = React.useState([]);
  const [voters, setVoters] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState();
  // To filter data according to voter and candidates
  const [filter, setFilter] = React.useState("Candidates");

  React.useEffect(() => {
    async function getCandidates() {
      try {
        let axiosJWT = getAxios();
        await axiosJWT
          .get(`/admin/getAllCandidates`)
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

    async function getVoters() {
      try {
        let axiosJWT = getAxios();
        await axiosJWT
          .get(`/admin/getAllVoters`)
          .then((response) => {
            // console.log(response);
            if (response.data.status) {
              // toast.success(response.data.message);
              setVoters(response.data.data.voters);
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

    // if (filter === "Candidates") {
    getCandidates();
    // } else {
    getVoters();
    // }
  }, [filter]);

  function hideValidateModal() {
    setShowValidateModal(false);
  }

  return (
    <>
      <main className="adminDashboard">
        <h4 className="pageTitle mb-1">Dashboard</h4>
        <div className="card-stats">
          <div className="col-12 col-md-4 mt-3 mt-md-4 card-style">
            <div className="candidate card cardBody">
              <h5 className="pageTitle">Total Voters</h5>
              <p className="total-count">{voters.length}</p>
            </div>
          </div>
          <div className="col-12 col-md-4 mt-3 mt-md-4 card-style">
            <div className="candidate card cardBody">
              <h5 className="pageTitle">Total Candidates</h5>
              <p className="total-count">{candidates.length}</p>
            </div>
          </div>
        </div>

        <h5 className="mt-5">Verify Users</h5>
        <div className="mt-3 d-flex align-items-center">
          <h6>Filter By</h6>
          <button
            className={"btn ms-3 mx-4 adminDashboardTabs " + (filter === "Candidates" ? "activeTab" : "")}
            onClick={() => {
              setFilter("Candidates");
            }}
          >
            Candidates
          </button>
          <button
            className={"btn adminDashboardTabs " + (filter === "Voters" ? "activeTab" : "")}
            onClick={() => {
              setFilter("Voters");
            }}
          >
            Voters
          </button>
        </div>

        <table class="table table-hover mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">{filter === "Candidates" ? "Candidate" : "Voter"} Name</th>
              <th scope="col">Check Documents</th>
            </tr>
          </thead>
          <tbody>
            {filter === "Candidates" ? (
              <>
                {candidates.map((candidate, i) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{candidate.name}</td>
                        <td>
                          <button
                            type="submit"
                            className="verifyBtn"
                            onClick={() => {
                              setShowValidateModal(true);
                              setSelectedUser(candidate);
                            }}
                          >
                            Documents
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </>
            ) : (
              <>
                {voters.map((voter, i) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{voter.name}</td>
                        <td>
                          <button
                            type="submit"
                            className="verifyBtn"
                            onClick={() => {
                              setShowValidateModal(true);
                              setSelectedUser(voter);
                            }}
                          >
                            Documents
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </main>

      {showValidateModal ? (
        <>
          <Validate show={showValidateModal} handleModal={hideValidateModal} userData={selectedUser} userType={filter} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdminDashboard;
