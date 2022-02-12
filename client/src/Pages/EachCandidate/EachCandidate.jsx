import React from "react";
import { getAxios } from "../../Helpers/axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import "./EachCandidate.css";

const EachCandidate = () => {
  const { candidateId } = useParams();
  const [candidate, setCandidate] = React.useState([]);

  React.useEffect(() => {
    async function getCampaignData() {
      try {
        let axiosJWT = getAxios();
        await axiosJWT
          .get(`/candidate/${candidateId}`)
          .then((response) => {
            // console.log(response);
            if (response.data.status) {
              // toast.success(response.data.message);
              setCandidate(response.data.data);
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
    getCampaignData();
  }, []);

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return (
    <>
      <main className="eachCandidatePage">
        {candidate ? (
          <>
            <div className="leftContainer p-2">
              <div className="aboutContainer">
                <h5>About {candidate.name}</h5>
                <p className="mt-2">{candidate.about}</p>
              </div>
              <div className="agendasContainer mt-4">
                <h5 className="d-flex justify-content-between align-items-center">
                  <span>Election Agendas</span>{" "}
                </h5>

                {candidate.electionAgendas &&
                candidate.electionAgendas.length ? (
                  <>
                    <div className="row">
                      {candidate.electionAgendas.map((agenda, i) => (
                        <div className="agenda mt-3">
                          <h6 className="agendaTitle d-flex justify-content-between align-items-center">
                            {agenda.title}
                          </h6>
                          <p className="agendaDesc m-0">{agenda.description}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="rightContainer p-2">
              <div className="candidateProfileCard">
                <div className="candidateProfileCardCover"></div>
                <img
                  src={candidate.profilePic}
                  alt=""
                  className="candidateProfileImg"
                />

                <h5>
                  {candidate.name}, {getAge(new Date(candidate.dob))}
                </h5>

                <div className="candidateSocialLinks">
                  {candidate.socials && (
                    <a
                      href={candidate.socials.twitter}
                      target="_blank"
                      rel="noreferrer noopennor"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <i class="bx bxl-twitter"></i>
                    </a>
                  )}
                  {candidate.socials && (
                    <a
                      href={candidate.socials.instagram}
                      target="_blank"
                      rel="noreferrer noopennor"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <i class="bx bxl-instagram-alt"></i>
                    </a>
                  )}
                  {candidate.socials && (
                    <a
                      href={candidate.socials.facebook}
                      target="_blank"
                      rel="noreferrer noopennor"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <i class="bx bxl-facebook"></i>
                    </a>
                  )}
                </div>

                <p className="px-3 mt-2">{candidate.highestEducation}</p>
              </div>
            </div>
          </>
        ) : (
          <h4>Candidate Not Found</h4>
        )}
      </main>
    </>
  );
};

export default EachCandidate;
