import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import * as Routes from "./Routes.js";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Pages/Login";
import Candidates from "./Pages/Voter/Candidates";
import EditProfile from "./Pages/Candidate/Profile/Profile";
import Campaigns from "./Pages/Campaigns/Campaigns.jsx";
import MyCampaigns from "./Pages/Candidate/MyCampaigns/MyCampaigns.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path={Routes.login} component={Login} />
          {/* Voter Routes */}
          <Route exact path={Routes.candidates}>
            <Candidates />
          </Route>
          {/* Candidate Routes */}
          <Route exact path={Routes.editProfile}>
            <EditProfile />
          </Route>
          <Route exact path={Routes.myCampaigns}>
            <MyCampaigns />
          </Route>
          {/* Common Routes  */}
          <Route exact path={Routes.campaigns}>
            <Campaigns />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
