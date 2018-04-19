import React, { Component } from 'react';
import { render } from 'react-dom';
import AuthButton from '../auth/authButton';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg g-orange navBar-bg">
                <div className="navBar-logo-btn g-mint btn-lg mt-1">
                    <img className='mt-2 mr-1' src="https://seeklogo.com/images/H/hand-logo-10C1271C98-seeklogo.com.png" height='30px' width='30px' alt='logo' />
                    <a className="navbar-brand text-dark float-right mt-1" href="/">Back Roads Party</a>
                </div>
                <button className="navbar-toggler navBar-item" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navBar-item" id="navbarNavAltMarkup" >
                    <div className="navbar-nav">
                        <a className="nav-item nav-link btn text-dark g-mint ml-2" href="/">Home <span className="sr-only">(current)</span></a>  
                                            {/* add hover and "active" color change  */}
                        <a className="nav-item nav-link btn g-mint text-dark ml-1" href="/rentals">Rentals</a>
                        <a className="nav-item nav-link btn g-mint text-dark ml-1" href="/faq">FAQ</a>
                        <a className="nav-item nav-link btn g-mint text-dark ml-1" href="/contact">Contact</a>
                        {/* <a className="nav-item nav-link btn g-mint text-dark ml-1" href="/goodbye">Goodbye</a> */}
                    </div>
                </div>
                {/* <a className="nav-item nav-link text-dark float-right" href="/eventPlanning">Plan your event</a> */}
                {/* <AuthButton /> */}
            </nav>
        );
    }
}
