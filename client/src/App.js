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
import ProtectedRoute from "./ProtectedRoute.js";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path={Routes.login} component={Login} />

          {/* Voter Routes */}
          <ProtectedRoute exact path={Routes.voterEditProfile} authRole={["Voter"]}>
            <Sidebar />
            <VoterEditProfile />
          </ProtectedRoute>

          <ProtectedRoute exact path={Routes.slotBooking} authRole={["Voter"]}>
            <Sidebar />
            <SlotBooking />
          </ProtectedRoute>

          {/* Candidate Routes */}
          <ProtectedRoute exact path={Routes.candidateEditProfile} authRole={["Candidate"]}> 
            <Sidebar />
            <CandidateEditProfile />
          </ProtectedRoute>
          
          <ProtectedRoute exact path={Routes.myCampaigns} authRole={["Candidate"]}>
            <Sidebar />
            <MyCampaigns />
          </ProtectedRoute>

          {/* Admin Routes */}
          <ProtectedRoute exact path={Routes.adminDashboard} authRole={["Admin"]}>
            <Sidebar />
            <AdminDashboard />
          </ProtectedRoute>

          <ProtectedRoute exact path={Routes.votingResult} authRole={["Admin"]}>
            <Sidebar />
            <VotingResult />
          </ProtectedRoute>

          {/* Common Routes  */}
          <ProtectedRoute exact path={Routes.candidates} authRole={["Admin","Candidate","Voter"]}>
            <Sidebar />
            <Candidates />
          </ProtectedRoute>
          
          <ProtectedRoute exact path={Routes.eachCandidate} authRole={["Admin","Candidate","Voter"]}>
            <Sidebar />
            <EachCandidate />
          </ProtectedRoute>

          <ProtectedRoute exact path={Routes.campaigns} authRole={["Admin","Candidate","Voter"]}>
            <Sidebar />
            <Campaigns />
          </ProtectedRoute>

          <ProtectedRoute exact path={Routes.eachCampaign} authRole={["Admin","Candidate","Voter"]}>
            <Sidebar />
            <EachCampaign />
          </ProtectedRoute>

        </Switch>
      </Router>
    </>
  );
}

export default App;
