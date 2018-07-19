import React, { Component } from 'react';
import './landing.css';
import Typist from 'react-typist';
import Card from '../../components/card/card';

class Landing extends Component {


    render() {
        return (
           
                <div className="jumbotron">
                    <Typist><h1>Welcome</h1> </Typist>
                </div>
           
        )
    }
}

export default Landing;
