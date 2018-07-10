import React from "react";

class Projects extends Component {
    state = {
        interests:  /* Options dropdown menu */
        skills: /* Options dropdown menu */

    }

    /* Handle Change */
    handleChange(event)

    /* Handle submit button */
    handleSubmit(event)

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Interest(s)
                    {/* Dropdown checkbox menu for a list of interests */}
                    <input type="checkbox" name="interest" value="Front-End Development"/> Front-End Development
                    <input type="checkbox" name="interest" value="Back-End Development"/> Back-End Development
                    <input type="checkbox" name="interest" value="Full-Stack Development"/> Full-Stack Development
                    <input type="checkbox" name="interest" value="UI/UX Design"/> UI/UX Design
                    Skils
                    {/* Dropdown checkbox menu for list of skills and abilities. */}
                    <input type="checkbox" name="skill" value="HTML"/> HTML
                    <input type="checkbox" name="skill" value="CSS"/> CSS
                    <input type="checkbox" name="skill" value="JavaScript"/> JavaScript
                    <input type="checkbox" name="skill" value="jQuery"/> jQuery
                    <input type="checkbox" name="skill" value="Bootstrap"/> Bootstrap
                    <input type="checkbox" name="skill" value="AJAX"/> AJAX
                    <input type="checkbox" name="skill" value="MySQL"/> MySQL
                    <input type="checkbox" name="skill" value="MongoDB"/> MongoDB
                    <input type="checkbox" name="skill" value="PHP"/> PHP
                    <input type="checkbox" name="skill" value="Java"/> Java
                    <input type="checkbox" name="skill" value="Adobe Illustrator"/> Adobe Illustrator
                    <input type="checkbox" name="skill" value="Sketch"/> Sketch
                </label>
            </form>
        )
    }
}
