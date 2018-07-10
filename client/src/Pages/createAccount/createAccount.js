import React from "react";

class Account extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    /* Handle Change */
    handleChange(event)

    /* Handle Submit Button */
    handleSubmit(event)

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                   First Name
                   <input type="text" value={this.state.value} onChange={this.handleChange}/> 
                    Last Name
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    E-Mail
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    Password
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
            </form>
        )
    }
}

export default Account;