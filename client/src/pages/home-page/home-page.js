import React, {Component} from 'react';
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
                  <div className="intro-heading text-uppercase">Find your next </div>
                  <button className="btn btn-xl text-uppercase text-center" href="/submitproject">Submit a project</button>
                  <button className="btn btn-xl text-uppercase text-center" href="findproject">Find a project</button>
                </div>
              </div>
            </header>

            {/* // About section */}
    
            <section id="services">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">About us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-4">
                     <img className="rounded-circle img-fluid" src={require('./img/collab.jpeg')} alt=""/>
                    <h4 className="service-heading">Collaboration</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                  </div>
                  <div className="col-md-4">
                  <img className="rounded-circle img-fluid" src={require('./img/innovation.jpeg')} alt=""/>
                    <h4 className="service-heading">Responsive Design</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                  </div>
                  <div className="col-md-4">
                  <img className="rounded-circle img-fluid" src={require('./img/code.jpeg')} alt=""/>
                    <h4 className="service-heading">Web Security</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                  </div>
                </div>
              </div>
            </section>
        </div>
        );
    }
}

export default Homepage;