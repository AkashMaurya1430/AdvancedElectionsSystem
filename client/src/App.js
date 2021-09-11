import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Components/Login/Login";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/">
            <Sidebar />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
