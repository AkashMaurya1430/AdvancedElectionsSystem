import React from "react";

const Candidates = () => {
  return (
    <>
      <h5>Select a candidate from below and click the button to vote.</h5>

      <div className="candidates row">
        {[1, 2,3,4,5,6,7].map((candidate) => {
          return (
            <>
              <div className="col-12 col-sm-6 col-md-2 mt-3 mt-md-4">
                <div class="card">
                  <img
                    src="http://localhost:5000/images/profilePic/1646303268636image_1.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Pooja Shetty</h5>
                    <div className="text-center mt-3">
                      <button className="btn btn-primary mx-auto">Vote</button>
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
