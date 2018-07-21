import React, { Component } from 'react';
import './landing.css';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';

class Landing extends Component {


    render() {
        return (
           
                <div className="jumbotron">
                    <Typist avgTypingDelay={80} startDelay={1800}>
                        <div className="land-heading text-uppercase">Welcome</div> 
                        <h4 className="text-center">Let's get started</h4>
                        
                    
                    </Typist>

                    <Typist avgTypingDelay={80} startDelay={5000}>
                    <Link to="/submitproject"><button className="btn btn-xl text-uppercase text-center land-btn">Submit a project</button></Link>
                    <Link to="/findproject"><button className="btn btn-xl text-uppercase text-center land-btn2">Find a project</button></Link>
                    </Typist>
                </div>
           
        )
    }
}

export default Landing;
