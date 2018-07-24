import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './home-page.css';

// homepage
class Homepage extends Component {
    render() {
        return(
        <div>
            {/* // Header */}
            <header className="masthead">
              <div className="container">
                <div className="intro-text">
                  <div className="intro-lead-in">Welcome to devCollab!</div>
                  <div className="intro-heading text-uppercase">Find your next project.</div>
                  <Link to="/submitproject"><button className="btn btn-xl text-uppercase text-center">Submit a project</button></Link>
                  <Link to="/findproject"><button className="btn btn-xl text-uppercase text-center">Find a project</button></Link>
                </div>
              </div>
            </header>

            {/* // About section */}
    
            <section id="services">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">About us</h2>
                    <h3 className="section-subheading text-muted">devCollab. A place where developers can... collaborate!</h3>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-4">
                     <img className="rounded-circle img-fluid" src={require('./img/collab.jpeg')} alt=""/>
                    <h4 className="service-heading">Collaboration</h4>
                    <p className="text-muted">We are focused on creating a place for developers of all experience levels to come and discover neat open source projects to contribute to. Ever had a really cool idea for an app but maybe your frontend framework skills weren't too sharp? Submit that idea and see who'd be willing to collaborate with you on it!</p>
                  </div>
                  <div className="col-md-4">
                  <img className="rounded-circle img-fluid" src={require('./img/innovation.jpeg')} alt=""/>
                    <h4 className="service-heading">Innovation</h4>
                    <p className="text-muted">Come here to browse around at the many one of a kind project proposals or cool ideas. If something speaks to you, reach out to the developer leading that project and see if you'd be a fit!</p>
                  </div>
                  <div className="col-md-4">
                  <img className="rounded-circle img-fluid" src={require('./img/code.jpeg')} alt=""/>
                    <h4 className="service-heading">Community</h4>
                    <p className="text-muted">Besides finding unique side projects, we want to cultivate a supportive community of developers. 2 sets of eyes for debugging is ALWAYS better than 1!</p>
                  </div>
                </div>
              </div>
            </section>
        

            {/* // Team section */}
            <section class="bg-light" id="team">
            <div class="container">
                <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">Our Team</h2>
                    <h3 class="section-subheading text-muted">The faces behind devCollab.</h3>
                </div>
                </div>
                <div class="row">
                <div class="col-sm-4">
                    <div class="team-member">
                    <img class="mx-auto rounded-circle" src={require('./img/2017.PNG')} alt="LISA"/>
                    <h4>Lisa Huynh</h4>
                    <p class="text-muted">Full stack developer</p>
                    <ul class="list-inline social-buttons">
                        <li class="list-inline-item">
                        <a href="https://github.com/lhuynh1" target="blank">
                            <i class="fa fa-github"></i>
                        </a>
                        </li>
                        <li class="list-inline-item">
                        <a href="#">
                            <i class="fa fa-facebook"></i>
                        </a>
                        </li>
                        <li class="list-inline-item">
                        <a href="https://www.linkedin.com/in/lhuynh1/" target="blank">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="team-member">
                    <img class="mx-auto rounded-circle" src={require('./img/msdibble.png')} alt=""/>
                    <h4>Michael Dibble</h4>
                    <p class="text-muted">Full stack developer</p>
                    <ul class="list-inline social-buttons">
                        <li class="list-inline-item">
                        <a href="https://github.com/msdibble" target="blank">
                            <i class="fa fa-github"></i>
                        </a>
                        </li>
                        <li class="list-inline-item">
                        <a href="#">
                            <i class="fa fa-facebook"></i>
                        </a>
                        </li>
                        <li class="list-inline-item">
                        <a href="https://www.linkedin.com/in/michael-dibble-5b020ba1/" target="blank">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="team-member">
                    <img class="mx-auto rounded-circle" src="" alt=""/>
                    {/* <h4>Sharmeen Panjwani</h4>
                    <p class="text-muted">Full stack developer</p> */}
                    {/* <ul class="list-inline social-buttons">
                        <li class="list-inline-item">
                        <a href="#">
                            <i class="fa fa-github"></i>
                        </a>
                        </li>
                        <li class="list-inline-item">
                        <a href="#">
                            <i class="fa fa-facebook"></i>
                        </a>
                        </li>
                        <li class="list-inline-item">
                        <a href="#">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        </li>
                    </ul> */}
                    </div>
                </div>
            </div>
          </div>
      </section>
    </div>
        );
    }
}

export default Homepage;