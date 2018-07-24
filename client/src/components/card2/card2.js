import React from 'react';
import axios from 'axios';
import './card2.css';

const Card2 = props => 
<div className="card2 card2-info">
    <h5>Project Name</h5>
        <p>DevCollab</p>
    <h5>Project Description</h5>
        <p>Final Project for Georgia Tech Coding BootCamp</p>
    <h5>Languages and Skills Needed for This Project</h5>
        <p>HTML, CSS, JavaScript, React.js, MongoDB</p>
    <h5>Project Link</h5>
        <a href = "https://github.com/lhuynh1/devCollab" id="projectLink">
        <p>https://github.com/lhuynh1/devCollab</p>
        </a>
</div>;

export default Card2;