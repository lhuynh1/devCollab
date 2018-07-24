import "./findProjectForm.css";
import React, {Component} from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import findProjectjson from "../../newProjectjson/findProject.json";
import axios from "axios";
import { Link } from "react-router-dom";
import Card2 from "../../components/card2/card2.js"
/* import { set } from "mongoose"; */


class findProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            selectedInterests: [],
            selectedSkills: [],
            returnedProjects: []
        };
    }

handleFormSubmit = (e) => {
    e.preventDefault();
    const formPayLoad = {
        selectedInterests: this.state.selectedInterests,
        selectedSkills: this.state.selectedSkills
    };
    console.log('Send this in a GET request', formPayLoad);
    // Axios.get method
    // Route to the results page 
    // If a user selects at least three languages that are in a submitted project,
    // return the project information from the mongo database and display it on the results page
    // Use a for loop to loop through the projectLanguages array
    if (formPayLoad) {
        axios.get('/submitproject',{ headers: { 'crossDomain': true, 'Content-Type': 'application/json' } })
            .then(res => this.setState({returnedProjects: res.data})
        .then(findState => {
            console.log(JSON.stringify(this.state.returnedProjects))
        }))
    }
}
handleInterestsSelection = (e) => {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.selectedInterests.indexOf(newSelection)  > -1) {
        newSelectionArray = this.state.selectedInterests.filter(s => s !== newSelection)
    } else {
        newSelectionArray = [...this.state.selectedInterests, newSelection];
    }
    this.setState ({ selectedInterests: newSelectionArray }, () => console.log('Interests Selection', this.state.selectedInterests));
    }

handleSkillsSelection = (e) => {
    const newSelection = e.target.value;
    let newSelectionArray;
    if(this.state.selectedSkills.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.selectedSkills.filter(s => s !== newSelection)
    } else {
        newSelectionArray = [...this.state.selectedSkills, newSelection];
    }
    this.setState ({ selectedSkills: newSelectionArray }, () => console.log('Skills Selection', this.state.selectedSkills));

}

render() {
    return (
    <div>
        <form className="container" id="findProject" onSubmit={this.handleFormSubmit}>
            <h3>Find a Project</h3>

            <h2>Select your interest(s)</h2>
            <Checkbox
                setName = {'Interests'}
                type = {'checkbox'}
                controlFunc = {this.handleInterestsSelection}
                options = {findProjectjson.Interests}
                selectedOptions = {this.state.selectedInterests}
            />
            <h2>Select your skills</h2>
            <Checkbox
                setName = {'Skills'}
                type = {'checkbox'}
                controlFunc = {this.handleSkillsSelection}
                options = {findProjectjson.Skills}
                selectedOptions = {this.state.selectedSkills}
            />
            <input
                type="submit"
                className="btn btn-primary"
                id="findBtn"
                value="Submit"/>
        </form>
        <Card2>
                
        <h1>Projects Recommended For You</h1>
        <h5>Project Name</h5>
            <p>{this.state.returnedProjects.projectName}</p>
        <h5>Project Description</h5>
            <p></p>
        <h5>Languages/Skills Needed for Project</h5>
            <p></p>
        <h5>Project Link</h5>
        
    </Card2>
</div>
    )
}

}

export default findProjectForm;