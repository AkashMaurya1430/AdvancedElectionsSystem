import React from "react";

import "./AdminDashboard.css";

const AdminDashboard = () => {

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
                                     <td><a href="https://www.google.com/">Documents</a></td>
                                 </tr>
                                 <tr>
                                   <th scope="row">2</th>
                                     <td>Akash Maurya</td>
                                     <td><a href="https://www.google.com/">Documents</a></td>
                                 </tr>
                                 <tr>
                                   <th scope="row">3</th>
                                     <td>Ganesh Yadava</td>
                                     <td><a href="https://www.google.com/">Documents</a></td>
                                 </tr>
                              </tbody>
                          </table>
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
                                     <td><a href="https://www.google.com/">Documents</a></td>
                                 </tr>
                                 <tr>
                                   <th scope="row">2</th>
                                     <td>Akash Maurya</td>
                                     <td><a href="https://www.google.com/">Documents</a></td>
                                 </tr>
                                 <tr>
                                   <th scope="row">3</th>
                                     <td>Ganesh Yadava</td>
                                     <td><a href="https://www.google.com/">Documents</a></td>
                                 </tr>
                              </tbody>
                          </table>
                      </div>
                   </div>
                </div>
            </div>
                        
          </main>
        </>
        
    )
}

export default AdminDashboard;
