import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/card/card';
// wrapper for background
// import navbar
// import footer

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    userInput = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    userData = (event) => {
        event.preventDefault();

        this.setState({
            invalidsignin: false,
            invalidusername: false,
            invalidpassword: false
        });

        const checkusername = /^[A-Za-z0-9_]{3,10}$/.test(this.state.username);
        const checkpassword = /^[A-Za-z0-9!@#$%^&*_]{6,10}$/.test(this.state.password);

        if (checkusername && checkpassword) {
            axios.post('/api/signup', this.state)
                .then((data) => {
                    sessionStorage.setItem('isAuthenticated', JSON.stringify(true));
                    sessionStorage.setItem('userName', JSON.stringify(this.state.username));
                    window.location.reload();
                }).catch((err) => {
                    this.setState({invalidsignin: true});
                });
        }
        if (!checkusername) {
            this.setState({invalidusername: true});
        }
        if (!checkpassword) {
            this.setState({invalidpassword: true});
        }
    };

    // render components
    render() {
        return (
            // wrapper for background
            // nav bar
            // footer
            <Card>
                <div className="panel-heading"><h1>Create an account!</h1></div>
                {(this.state.invalidsignin) ? 
                <p className="err"> Sorry, this username is taken. </p> :null}

                {(this.state.invalidusername) ? 
                <p className="err">Username must be between 3-10 characters and no container any special characters</p> :null}

                {(this.state.invalidpassword) ? 
                <p className="err">Password must be between 3-10 characters long.</p> :null}

                <form>
                    <input
                        type="text"
                        name="username"
                        className="input"
                        placeholder="username"
                        onChange={this.userInput} />
                    
                    <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="password"
                        onChange={this.userInput} />

                    <button className="btn btn-info" onClick={this.userData}>Sign up</button>
                    <p> Aready have an account?</p>
                    <Link to='/signin'><p>Sign in</p></Link>
                </form>
            </Card>
        )
    }
  
}

export default Signup;