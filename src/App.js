import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friend/:friendID">
            <FriendDetails></FriendDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>

      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
    </div>
  );
}

export default App;
