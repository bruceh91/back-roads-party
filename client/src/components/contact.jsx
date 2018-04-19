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
                <div className='pt-5'>
                    <div className='pt-5'>
                        <h3>click the FAQ tab above to see our rental policies and rules</h3>
                    </div>
                </div>
                <hr />
                <div>
                    <h3>-- open hours --</h3>
                    <ul>
                        <li>Monday: 9:00-5:00</li>
                        <li>Tuesday: 9:00-5:00</li>
                        <li>Wednesday: 9:00-5:00</li>
                        <li>Thursday: 9:00-5:00</li>
                        <li>Friday: 9:00-5:00</li>
                        <li>Saturday: closed</li>
                        <li>Sunday: closed</li>
                    </ul>
                </div>
                <hr />
                <div>
                    <h4>Phone: 012-345-6789</h4>
                    <h4>email: blahblah@blah.com</h4>
                    <h5>If we don't answer please leave a message and we will call you back as soon as possible</h5>
                </div>
            </Fragment>
        )
    }
}

export default Contact;