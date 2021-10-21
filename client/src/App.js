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

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path={Routes.login} component={Login} />

          {/* Voter Routes */}

          <Route exact path={Routes.voterEditProfile}>
            <VoterEditProfile />
          </Route>

          <Route exact path={Routes.slotBooking}>
            <SlotBooking />
          </Route>

          {/* Candidate Routes */}
          <Route exact path={Routes.candidateEditProfile}>
            <CandidateEditProfile />
          </Route>
          <Route exact path={Routes.myCampaigns}>
            <MyCampaigns />
          </Route>

          {/* Common Routes  */}
          <Route exact path={Routes.candidates}>
            <Candidates />
          </Route>
          <Route exact path={Routes.eachCandidate}>
            <EachCandidate />
          </Route>

          <Route exact path={Routes.campaigns}>
            <Campaigns />
          </Route>
          <Route exact path={Routes.eachCampaign}>
            <EachCampaign />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
