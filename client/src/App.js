import React, {Component} from "react";
import './App.css';
import FindProjectForm from "./pages/findProjectForm/findProjectForm";

class App extends Component {
  render() {
    return(
      <div className="container">
        <div className="columns">
          <div className="col-md-9 centered">
          <FindProjectForm/>
          </div>
        </div>
      </div>
    )
  }
}

/* class App extends Component {

} */

/* const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={findProjectForm}/>
      </Switch>
    </div> 
  </Router> 
); */

export default App;
