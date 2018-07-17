import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

class Footer extends Component {
    render() {
       return(
            //  <!-- Footer -->
        <div>
        <footer>
        <div className="container">
            <div className="row">
            <div className="col-md-12 text-center">
                <span className="copyright">Copyright &copy; devCollab 2018</span>
            </div>
            </div>
        </div>
            {/* <div className="col-md-4">
                <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                    <a href="#">
                    <i className="fa fa-twitter"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#">
                    <i className="fa fa-facebook"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#">
                    <i className="fa fa-linkedin"></i>
                    </a>
                </li>
                </ul>
            </div>
            <div className="col-md-4">
                <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Terms of Use</a>
                </li>
                </ul>
            </div>
            </div>
        </div> */}
        </footer>
        </div>
        
       )
    }

}

export default Footer;