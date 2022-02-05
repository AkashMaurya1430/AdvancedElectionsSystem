import React from "react";

import "./VotingResult.css";
import Progress from "../../Components/Progressbar/Progressbar";
import Votes from "../../Components/EachCandidateVote/EachCandidateVote";

const VotingResult = () => {
    return (
        <>
           <main className="votingResult">
              <h4 className="pageTitle mb-1">Voting Results</h4>
              <Progress done="85"/>
              <hr className="partition"></hr>
              <div className="votes col-12 col-md-4 mt-3 mt-md-4">
                  <div className="result">
                     <h5>Akash Maurya</h5> 
                     <Votes value="25"/>  
                  </div>  
              </div>
              <div className="votes col-12 col-md-4 mt-3 mt-md-4">
                  <div className="result">
                     <h5>Pooja Shetty</h5> 
                     <Votes value="35"/>  
                  </div>  
              </div>
              <div className="votes col-12 col-md-4 mt-3 mt-md-4">
                  <div className="result">
                     <h5>Ganesh Yadava</h5> 
                     <Votes value="40"/>  
                  </div>  
              </div>
              <div className="votes col-12 col-md-4 mt-3 mt-md-4">
                  <div className="result">
                     <h5>Michael Ross</h5> 
                     <Votes value="45"/>  
                  </div>  
              </div>
              <div className="votes col-12 col-md-4 mt-3 mt-md-4">
                  <div className="result">
                     <h5>Harvey Specter</h5> 
                     <Votes value="65"/>  
                  </div>  
              </div>
              <div className="votes col-12 col-md-4 mt-3 mt-md-4">
                  <div className="result">
                     <h5>Rachael Zane</h5> 
                     <Votes value="80"/>  
                  </div>  
              </div>
              <div className="votes col-12 col-md-4 mt-3 mt-md-4">
                  <div className="result">
                     <h5>Jessica Pearson</h5> 
                     <Votes value="75"/>  
                  </div>  
              </div>

           </main>
        </>
    )
}

export default VotingResult;