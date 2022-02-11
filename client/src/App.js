import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import * as Routes from "./Routes.js";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Pages/Login";
import Candidates from "./Pages/Candidates";
import EachCandidate from "./Pages/EachCandidate/EachCandidate.jsx";
import CandidateEditProfile from "./Pages/Candidate/Profile/Profile";
import VoterEditProfile from "./Pages/Voter/Profile/Profile";
import SlotBooking from "./Pages/Voter/SlotBooking/SlotBooking";

import Campaigns from "./Pages/Campaigns/Campaigns.jsx";
import MyCampaigns from "./Pages/Candidate/MyCampaigns/MyCampaigns.jsx";
import "./App.css";
import EachCampaign from "./Pages/EachCampaign/EachCampaign.jsx";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard.jsx";
import VotingResult from "./Pages/VotingResult/VotingResult.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path={Routes.login} component={Login} />

          {/* Voter Routes */}
          <Route exact path={Routes.voterEditProfile}>
            <Sidebar />
            <VoterEditProfile />
          </Route>

          <Route exact path={Routes.slotBooking}>
            <Sidebar />
            <SlotBooking />
          </Route>

          {/* Candidate Routes */}
          <Route exact path={Routes.candidateEditProfile}>
            <Sidebar />
            <CandidateEditProfile />
          </Route>
          <Route exact path={Routes.myCampaigns}>
          <Sidebar />
            <MyCampaigns />
          </Route>

          {/* Admin Routes */}
          <Route exact path={Routes.adminDashboard}>
            <Sidebar />
            <AdminDashboard />
          </Route>

          <Route exact path={Routes.votingResult}>
            <Sidebar />
            <VotingResult />
          </Route>

          {/* Common Routes  */}
          <Route exact path={Routes.candidates}>
            <Sidebar />
            <Candidates />
          </Route>
          
          <Route exact path={Routes.eachCandidate}>
            <Sidebar />
            <EachCandidate />
          </Route>

          <Route exact path={Routes.campaigns}>
            <Sidebar />
            <Campaigns />
          </Route>
          <Route exact path={Routes.eachCampaign}>
            <Sidebar />
            <EachCampaign />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
