import React, { Component } from 'react';
import { render } from 'react-dom';
import AuthButton from '../auth/authButton';

export default class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: ''
        }
    }

    componentDidMount() {
        let url = location.href.split('/');
        let urlEnd = url[url.length - 1];
        if (urlEnd != '') {
            this.setState({ active: urlEnd });
        }
    }

    render() {
        // console.log("this" + this.state.active)
        return (
            <div>

                <nav className="navbar navbar-expand-lg nav-color navBar-bg">

                    <button className="navbar-toggler navBar-item nav-tog-button float-left" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon nav-tog float-left"></span>
                    </button>
                    <div className="collapse navbar-collapse navBar-item" id="navbarNavAltMarkup" >
                        <div className="navbar-nav">
                            <a className={"nav-item nav-link text-dark ml-2" + (this.state.active == '' ? ' nav-active' : "")} href="/">Home</a>
                            <a className={"nav-item nav-link text-dark ml-1" + (this.state.active == 'rentals' ? ' nav-active' : "")} href="/rentals">Rentals</a>
                            <a className={"nav-item nav-link text-dark ml-1" + (this.state.active == 'venues' ? ' nav-active' : "")} href="/venues">Venues</a>
                            <a className={"nav-item nav-link text-dark ml-1" + (this.state.active == 'gallery' ? ' nav-active' : "")} href="/gallery">Gallery</a>
                            <a className={"nav-item nav-link text-dark ml-1" + (this.state.active == 'faq' ? ' nav-active' : "")} href="/faq">FAQ</a>
                            <a className={"nav-item nav-link text-dark ml-1" + (this.state.active == 'contact' ? ' nav-active' : "")} href="/contact">Contact</a>
                        </div>
                    </div>
                    <span className="navbar-text">Back Roads Party Co. </span>
                </nav>
            </div>
        );
    }
}