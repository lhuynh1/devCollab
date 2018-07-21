import './navbar.css';
import React, {Component} from 'react';

// Navigation
class Navbar extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="/">devCollab</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/submitproject">Submit a Project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/findproject">Find a project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">Sign up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signin">Sign in</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout">Log out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;