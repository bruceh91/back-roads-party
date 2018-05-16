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
        if ( urlEnd != '') {
        this.setState({ active: urlEnd });
        }
    }

    render() {
        // console.log("this" + this.state.active)
        return (
            <nav className="navbar navbar-expand-lg g-orange navBar-bg">
                <div className="navBar-logo-btn g-mint btn-lg mt-1">
                    <img className='mt-2 mr-1' src="https://s3.us-east-2.amazonaws.com/back-roads-party/small_logo_trans.png" height='30px' width='30px' alt='logo' />
                    <a className="navbar-brand text-dark float-right mt-1" href="/">Back Roads Party</a>
                </div>
                <button className="navbar-toggler navBar-item" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navBar-item" id="navbarNavAltMarkup" >
                    <div className="navbar-nav">
                        <a className={ "nav-item nav-link btn text-dark g-mint ml-2" + ( this.state.active == '' ? ' nav-active' : "") } href="/">Home</a>  
                        <a className={ "nav-item nav-link btn g-mint text-dark ml-1" + ( this.state.active == 'rentals' ? ' nav-active' : "") } href="/rentals">Rentals</a>
                        <a className={ "nav-item nav-link btn g-mint text-dark ml-1" + ( this.state.active == 'faq' ? ' nav-active' : "") } href="/faq">FAQ</a>
                        <a className={ "nav-item nav-link btn g-mint text-dark ml-1" + ( this.state.active == 'contact' ? ' nav-active' : "") } href="/contact">Contact</a>
                    </div>
                </div>
            </nav>
        );
    }
}
