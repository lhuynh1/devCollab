import "./findProjectForm.css";
import React, {Component} from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import findProjectjson from "../../newProjectjson/findProject.json";
import axios from "axios";
/* import { set } from "mongoose"; */

class Card2 extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
    <div className="card2 card2-info">
    <h1>Project Name</h1>
        <p>DevCollab</p>
    <h5>Project Description</h5>
        <p>Final Project for Georgia Tech Coding BootCamp</p>
    <h5>Languages and Skills Needed for This Project</h5>
        <p>HTML, CSS, JavaScript, React.js, MongoDB</p>
    <h5>Project Link</h5>
        <a href = "https://github.com/lhuynh1/devCollab" id="projectLink">
        <p>https://github.com/lhuynh1/devCollab</p>
        </a>
    </div>
        )
    }
}

class Card3 extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
    <div className="card3 card3-info">
    <h1>Project Name</h1>
        <p>SyneScribble</p>
    <h5>Project Description</h5>
        <p>The purpose of this project is utilizing Paper.js and Firebase to create a dynamically updated community gallery of in-browser drawings. Paper.js allows a user to draw on the canvas element in HTML as point values. The drawing canvas is converted to an image and the data for it + the creator's name are stored in the Firebase database. The ColorAPI pulls rgb values that allow the users to choose which color to use when drawing. When the "Submit" button is clicked, the user's drawing is appended into the Gallery div, the data is pushed into Firebase and it is posted into Twitter with the use of the Twitter API and Codebird.</p>
    <h5>Languages and Skills Needed for This Project</h5>
        <p>HTML, CSS, JavaScript, React Js, Firebase</p>
    <h5>Project Link</h5>
        <a href = "https://github.com/msdibble/synescribble" id="projectLink">
        <p>https://github.com/msdibble/synescribble</p>
        </a>
    </div>
        )
    }
}

class findProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            selectedInterests: [],
            selectedSkills: [],
            returnedProjects: [],
            showCard2: false,
            showCard3: false
        };
    }

handleFormSubmit = (e) => {
    e.preventDefault();
    const formPayLoad = {
        selectedInterests: this.state.selectedInterests,
        selectedSkills: this.state.selectedSkills,
        returnedProjects: this.state.returnedProjects
    };
    console.log('Send this in a GET request', formPayLoad);
    // Axios.get method
    // If a user selects at least three languages that are in a submitted project,
    // return the project information from the mongo database and display it on the results page
    if (formPayLoad) {
        axios.get('api/submitproject')
            .then((res) => {
                this.returnedProjects = res.data;
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

onClick = (e) => {
    e.preventDefault();
    this.setState({showCard2: !this.state.showCard2});
    this.setState({showCard3: !this.state.showCard3});
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
        <div className="find-form">
            <form className="container" id="findProject" action="/submit" onSubmit={this.handleFormSubmit}>
                <h3>Find a Project Form</h3>
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
                <button
                    onClick={this.onClick.bind(this)}
                    id="submit"
                    type="submit"
                    className="btn btn-primary"
                    value="Submit">Submit </button>
            </form>

            <div>
                <container id="resultsSection">
                    <a onClick={this.onClick.bind(this)} href='#'></a>
                    {this.state.showCard2 && <Card2 />}
                    {this.state.showCard3 && <Card3 />}
                </container>
            </div>
            
        </div> 
    )
}

}

export default findProjectForm;