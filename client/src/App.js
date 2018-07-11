import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react";
import './App.css';
import submitProject from "./Pages/submitProject";

/* class App extends Component {

} */

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={submitProject}/>
      </Switch>
    </div> 
  </Router> 
);

export default App;
