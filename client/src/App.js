import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Sidebar />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
