import "./submitProjectForm.css";
import React, {Component} from "react";
import InputArea from "../submitProjectForm/submitProjectForm.css";
import inputArea from "../../components/inputArea/inputArea";

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

// Handle form submission
handleFormSubmit(e) {
    e.preventDefault();

    const formPayload = {
        projectName: this.state.projectName,
        projectDescription: this.state.projectDescription,
        projectLanguages: this.state.projectLanguages,
        projectLink: this.state.projectLink
    }
}

/* Handle project name change */
 handleProjectName() {

 }

 handleProjectDescription () {

 }

 handleProjectLanguages () {

 }

 handleProjectLink () {

 }

render() {
    return (
        <form className="container" onSubmit={this.handleFormSubmit}>
            <h3>Submit a Project Form</h3>
            <InputArea
                inputType={'text'}
                title={'Project Name'}
                name={'name'}
                controlFunc={this.handleProjectName}
                content={this.projectName}
                placeholder = {'Project name here...'} />
            <inputArea 
                inputType={'text'}
                title={'Project Descriptions'}
                name={'name'}
                controlFunc={this.handleProjectDescription}
                content={this.projectDescription}
                placeholder={'Project description here...'} />
            <inputArea
                inputType={'text'}
                title={'Languages and Skills required for Project'}
                name={'name'}
                controlFunc={this.handleProjectLanguages}
                content={this.projectLanguages}
                placeholder={'Langauges and skills here...'} />
            <inputArea
                inputArea={'text'}
                title={'Link to Project'}
                name={'name'}
                controlFunc={this.handleProjectLink}
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