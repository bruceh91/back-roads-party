import React, { Component } from 'react';
import { render } from 'react-dom';
import AuthButton from '../auth/authButton';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navBar-bg">
                <a className="navbar-brand d-grey-t" href="/">Back Roads Party</a>
                <button className="navbar-toggler navBar-item" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navBar-item" id="navbarNavAltMarkup" >
                    <div className="navbar-nav">
                        <a className="nav-item nav-link d-grey-t active" href="/">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link d-grey-t" href="/rentals">Rentals</a>
                    </div>
                </div>
                <a className="nav-item nav-link d-grey-t float-right" href="/eventPlanning">Plan your event</a>
                <AuthButton />
            </nav>
        );
    }
}
