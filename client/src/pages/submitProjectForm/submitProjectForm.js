import "./submitProjectForm.css";
import React, {Component} from "react";
import InputArea from "../../components/inputArea/inputArea";

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
        <form className="container" id="submitProject" onSubmit={this.handleFormSubmit}>
            <h3>Submit a Project Form</h3>
                <h2>Project Name</h2>
                    <InputArea
                        inputType={'text'}
                        name={'name'}
                        controlFunc={this.handleProjectName}
                        content={this.projectName}
                        placeholder = {'Project name here...'} />
                <h2>Project Description</h2>
                    <InputArea 
                        inputType={'text'}
                        name={'name'}
                        controlFunc={this.handleProjectDescription}
                        content={this.projectDescription}
                        placeholder={'Project description here...'} />
                <h2>Languages and Skills Required for Project</h2>
                    <InputArea
                        inputType={'text'}
                        name={'name'}
                        controlFunc={this.handleProjectLanguages}
                        content={this.projectLanguages}
                        placeholder={'Langauges and skills here...'} />
                <h2>Link to Project</h2>
                    <InputArea
                        inputType={'text'}
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

export default submitProjectForm;