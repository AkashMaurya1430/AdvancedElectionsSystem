import React from "react";
import "./EachCandidate.css";

const EachCandidate = () => {
  const agendas = [
    {
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolores eum tempore numquam et cum,",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolores eum tempore numquam et cum,",
    },
  ];
  return (
    <>
      <main className="eachCandidatePage">
        <div className="leftContainer p-2">
          <div className="aboutContainer">
            <h5>About Akash maurya</h5>
            <p className="mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias reprehenderit, ipsam temporibus velit eveniet molestias ex quas eos
              ullam dolore, magnam tempore id quasi amet voluptatem, cupiditate numquam debitis consequuntur? Rem magni atque quasi maxime et
              voluptates neque ut quisquam!
            </p>
          </div>
          <div className="agendasContainer mt-4">
            <h5 className="d-flex justify-content-between align-items-center">
              <span>Election Agendas</span>{" "}
            </h5>

            {agendas ? (
              <>
                <div className="row">
                  {agendas.map((agenda, i) => (
                    <div className="agenda mt-3">
                      <h6 className="agendaTitle d-flex justify-content-between align-items-center">{agenda.title}</h6>
                      <p className="agendaDesc m-0">{agenda.desc}</p>
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
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="candidateProfileImg"
            />

            <h5>Akash Maurya, 21</h5>

            <div className="candidateSocialLinks">
              <i class="bx bxl-twitter"></i>
              <i class="bx bxl-instagram-alt"></i>
              <i class="bx bxl-facebook"></i>
            </div>

            <p className="px-3 mt-2">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default EachCandidate;
