import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Card from '../../components/card/card';
import './sign-in.css';
// wrawpper
// nav
// footer

class Signin extends Component {
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
            invalidlogin: false
        });

        const checkusername = /^[A-Za-z0-9_]{3,10}$/.test(this.state.username);
        const checkpassword = /^[A-Za-z0-9!@#$%^&*_]{6,10}$/.test(this.state.password);

        if (checkusername && checkpassword) {
            axios.post('/api/signin', this.state)
                .then((data) => {
                    sessionStorage.setItem('isAuthenticated', JSON.stringify(true));

                    sessionStorage.setItem('userName', JSON.stringify(this.state.username));

                    this.setState({invalidlogin: false});
                    window.location.reload();
                }).catch((err) => {
                    // not logged in
                    console.log(err);
                    this.setState({invalidlogin: true});
                });
        }
        if(!checkusername) {
            this.setState({invalidlogin: true});
        }
        if(!checkpassword) {
            this.setState({invalidlogin: true});
        }

};

// render components 
 render() {
     return (
         <Card>
             <div className="panel-heading"><h1>Sign in</h1></div>
             {(this.state.invalidlogin) ?
             <p className="err">Incorrect username or password.</p> :null}

             <form>
                 <input
                 type="text"
                 name="username"
                 className="input"
                 placeholder="username"
                 onChange={this.userInput} />

                 <input
                 type="text"
                 name="password"
                 className="input"
                 placeholder="password"
                 onChange={this.userInput} />

                 <button className="btn btn-info" onClick={this.userData}>Sign in</button>
                 <p>Don't have an account yet? What are you waiting for?</p>
                 <Link to='/signup'><p>Sign up</p></Link>
             </form>
         </Card>
     )
  }

}

export default Signin;