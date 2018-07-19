import React, { Component, Fragment } from 'react';
// import { Fragment } from 'react-router-dom';
import { render } from 'react-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                
                <div className="pt-5 text-center">
                    <h3>Contact Information</h3>
                    <div className="pt-3 w-75 mx-auto faq-div flex-wrap picture-shadow pb-3">
                        <h4>Phone: 012-345-6789</h4>
                        <h5>If we don't answer please leave a message and we will call you back as soon as possible</h5>
                        <h4>email: blahblah@blah.com</h4>
                        <h4>facebook: facebook.com/ljndsfjndskjf</h4>
                    </div>
                </div>
                <hr />
                <div className='p-2'>
                    <h3 className="text-center" >click the FAQ tab above to see our rental policies and rules</h3>
                </div>
                <hr />
                <div className="pt-1 text-center mb-5">
                    <h3>Hours of Operation</h3>
                    <div className="pt-3 w-75 mx-auto faq-div flex-wrap picture-shadow pb-3">
                        <h5 className="faq-list" >Monday: 9:00-5:00</h5>
                        <h5 className="faq-list" >Tuesday: 9:00-5:00</h5>
                        <h5 className="faq-list" >Wednesday: 9:00-5:00</h5>
                        <h5 className="faq-list" >Thursday: 9:00-5:00</h5>
                        <h5 className="faq-list" >Friday: 9:00-5:00</h5>
                        <h5 className="faq-list" >Saturday: closed</h5>
                        <h5 className="faq-list" >Sunday: closed</h5>
                    </div>
                </div>
                
            </Fragment>
        )
    }
}

export default Contact;