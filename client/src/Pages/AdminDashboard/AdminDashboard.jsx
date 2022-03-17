import React, { useState } from "react";
import { useHistory } from "react-router";
import Validate from "./Validate";
import "./AdminDashboard.css";

const AdminDashboard = () => {

   const history = useHistory();
   const [showValidateModal, setShowValidateModal] = useState(false);
   const [formData, setFormData] = React.useState();

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
                      <p className="total-count">6,250</p>
                   </div>
                </div>
                <div className="col-12 col-md-4 mt-3 mt-md-4 card-style">
                   <div className="candidate card cardBody">
                      <h5 className="pageTitle">Total Candidates</h5>
                      <p className="total-count">10</p>
                   </div>
                </div>
            </div>

            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                   <h2 class="accordion-header" id="headingOne">
                   <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     Validate Candidates
                   </button>
                   </h2>
                   <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <table class="table table-striped table-hover">
                              <thead>
                                 <tr>
                                   <th scope="col">#</th>
                                   <th scope="col">Candidates</th>
                                   <th scope="col">Check Documents</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                   <th scope="row">1</th>
                                     <td>Pooja Shetty</td>
                                     <td><button type="submit" className="verifyBtn" data-toggle="modal" data-target="#candidateModal" onClick={(e) => {
                                        e.preventDefault();
                                        setShowValidateModal(true);
                                     }}
                                     >
                                       Documents
                                       </button></td>
                                 </tr>
                                 <tr>
                                   <th scope="row">2</th>
                                     <td>Akash Maurya</td>
                                     <td><button type="submit" className="verifyBtn" data-toggle="modal" data-target="#candidateModal" >Documents</button></td>
                                 </tr>
                                 <tr>
                                   <th scope="row">3</th>
                                     <td>Ganesh Yadava</td>
                                     <td><button type="submit" className="verifyBtn" data-toggle="modal" data-target="#candidateModal">Documents</button></td>
                                 </tr>
                                 <tr>
                                   <th scope="row">3</th>
                                     <td>Ron Weasley</td>
                                     <td><button type="submit" className="verifyBtn" data-toggle="modal" data-target="#candidateModal">Documents</button></td>
                                 </tr>
                              </tbody>  
                          </table>
                          <div class="modal fade" id="candidateModal" role="dialog">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                   <div class="modal-header">
                                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                                      <h4 class="modal-title">Modal Header</h4>
                                   </div>
                                   <div class="modal-body">
                                      <p>Some text in the modal.</p>
                                   </div>
                                   <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                   </div>
                              </div>
      
                            </div>
                          </div>
                      </div>
                   </div>
                </div>
                <div class="accordion-item">
                   <h2 class="accordion-header" id="headingTwo">
                   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                     Validate Voters
                   </button>
                   </h2>
                   <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <table class="table table-striped table-hover">
                              <thead>
                                 <tr>
                                   <th scope="col">#</th>
                                   <th scope="col">Candidates</th>
                                   <th scope="col">Check Documents</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                   <th scope="row">1</th>
                                     <td>Pooja Shetty</td>
                                     <td><button type="submit" className="verifyBtn" data-toggle="modal" data-target="#exampleModal">Documents</button></td>
                                 </tr>
                                 <tr>
                                   <th scope="row">2</th>
                                     <td>Akash Maurya</td>
                                     <td><button type="submit" className="verifyBtn" data-toggle="modal" data-target="#exampleModal">Documents</button></td>
                                 </tr>
                                 <tr>
                                   <th scope="row">3</th>
                                     <td>Ganesh Yadava</td>
                                     <td><button type="submit" className="verifyBtn" data-toggle="modal" data-target="#exampleModal">Documents</button></td>
                                 </tr>
                              </tbody>
                          </table>
                      </div>
                   </div>
                </div>
            </div>              
          </main>
          <Validate show={showValidateModal} handleModal={hideValidateModal} />
        </>
        
    );
};

export default AdminDashboard;