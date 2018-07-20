import "./findProjectForm.css";
import React, {Component} from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import findProjectjson from "../../newProjectjson/findProject.json";
import axios from "axios";
/* import { set } from "mongoose"; */


class findProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            selectedInterests: [],
            selectedSkills: []
        };
    }

handleFormSubmit = (e) => {
    e.preventDefault();
    const formPayLoad = {
        selectedInterests: this.state.selectedInterests,
        selectedSkills: this.state.selectedSkills
    };
    console.log('Send this in a POST request', formPayLoad);

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
        <form className="container" id="findProject" onSubmit={this.handleFormSubmit}>
            <h3>Find a Project Form</h3>
            <Checkbox
                title = {'Select your interest(s)'}
                setName = {'Interests'}
                type = {'checkbox'}
                controlFunc = {this.handleInterestsSelection}
                options = {findProjectjson.Interests}
                selectedOptions = {this.state.selectedInterests}
            />
            <Checkbox
                title = {'Select your skills'}
                setName = {'Skills'}
                type = {'checkbox'}
                controlFunc = {this.handleSkillsSelection}
                options = {findProjectjson.Skills}
                selectedOptions = {this.state.selectedSkills}
            />
            <input
                type="submit"
                className="btn btn-primary"
                value="Submit"/>
        </form>

    )
}

}

export default findProjectForm;