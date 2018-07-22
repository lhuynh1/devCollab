import "./submitProjectForm.css";
import React, {Component} from "react";
import InputArea from "../../components/inputArea/inputArea";
import Checkbox from "../../components/Checkbox/Checkbox.js";
import findProjectjson from "../../newProjectjson/findProject.json";
import axios from "axios";

class submitProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: '',
            projectDescription: '',
            projectLanguages: [],
            projectLink: ''
        };
    }

handleProjectNameChange = (e) => {
    this.setState({ projectName: e.target.value }, () => console.log('project name', this.state.projectName));
}

handleProjectDescriptionChange = (e) => {
    this.setState({ projectDescription: e.target.value }, () => console.log('project description', this.state.projectDescription));
}

handleProjectLinkChange = (e) => {
    this.setState({ projectLink: e.target.value}, () => console.log('project link', this.state.projectLink));
}

handleProjectLanguagesChange = (e) => {
    const newSelection = e.target.value;
    console.log(newSelection);
    let newSelectionArray;
    if(this.state.projectLanguages.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.projectLanguages.filter(s => s !== newSelection)
    } else {
        newSelectionArray = [...this.state.projectLanguages, newSelection];
    }
    this.setState ({ projectLanguages: newSelectionArray }, () => console.log('Project Languages', this.state.projectLanguages));
}

// Handle form submission
handleFormSubmit = (e) => {
    e.preventDefault();
    const formPayload = {
        projectName: this.state.projectName,
        projectDescription: this.state.projectDescription,
        projectLanguages: this.state.projectLanguages,
        projectLink: this.state.projectLink
    }
    console.log('Send this in a POST request', formPayload);
    if(formPayload) {
        axios.post('/api/submitproject', formPayload)
            .then(res => {
                console.log(res);
            })
        }
    }


render() {
    return (
        <form className="container" id="submitProject" onSubmit={this.handleFormSubmit}>
            <h3>Submit a Project Form</h3>
                <h2>Project Name</h2>
                    <InputArea
                        inputType={'text'}
                        name={'name'}
                        controlFunc={this.handleProjectNameChange}
                        content={this.projectName}
                        placeholder = {'Project name here...'} />
                <h2>Project Description</h2>
                    <InputArea 
                        inputType={'text'}
                        name={'name'}
                        controlFunc={this.handleProjectDescriptionChange}
                        content={this.projectDescription}
                        placeholder={'Project description here...'} />
                <h2>Languages and Skills Required for Project</h2>
                    <Checkbox 
                        setName = {'Languages'}
                        type = {'checkbox'}
                        controlFunc = {this.handleProjectLanguagesChange}
                        options = {findProjectjson.Skills}
                        selectedOptions = {this.state.projectLanguages}
                    />
                <h2>Link to Project</h2>
                    <InputArea
                        inputType={'text'}
                        name={'name'}
                        controlFunc={this.handleProjectLinkChange}
                        content={this.projectLink}
                        placeholder={'Project link here...'} />
                    <input
                        type="submit"
                        className="btn btn-primary float-right"
                        value="Submit"/>
        </form>
    );
}
}


export default submitProjectForm;