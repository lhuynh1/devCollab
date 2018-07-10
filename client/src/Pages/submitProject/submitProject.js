import React from "react";

class Project extends Component {
    state = {
        projectTitle: "",
        projectDescription: "",
        projectSkills: "",
        projectLink: "" /* Need to figure out how to put a link */
    
    }

    /* Handle Change */
    handleChange(event)

    /* Handle the submit button */
    handleSubmit(event)

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Project Name
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    Project projectDescription
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    Project Languages/projectSkills
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    Project link
                    {/* Need to figure out what to put for type */}
                    <input/> 
                </label>
            </form>
        )
    }
}



export default Project;