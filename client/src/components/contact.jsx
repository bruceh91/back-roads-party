import React, { Component, Fragment } from 'react';
// import { Fragment } from 'react-router-dom';
import { render } from 'react-dom';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            story: [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" } ]
        }
    }

    componentDidMount() {
        fetch(`/api/products/misc/misc`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ story: responseJson })
            });
    }

    render() {
        let phone = this.state.story[2].value;
        let email = this.state.story[3].value;
        let facebook = this.state.story[4].value;
        let mon = this.state.story[5].value;
        let tues = this.state.story[9].value;
        let wed = this.state.story[6].value;
        let thurs = this.state.story[7].value;
        let fri = this.state.story[8].value;
        let sat = this.state.story[10].value;
        let sun = this.state.story[11].value;
        return (
            <Fragment>
                <div className="pt-5 text-center">
                    <h3>Contact Information</h3>
                    <div className="pt-3 w-75 mx-auto faq-div flex-wrap picture-shadow pb-3">
                        <h4>Phone: {phone}</h4>
                        <h5>If we don't answer please leave a message and we will call you back as soon as possible</h5>
                        <h4>email: {email}</h4>
                        <h4>facebook: {facebook}</h4>
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
                        <p className="faq-list" >Monday: {mon}</p>
                        <p className="faq-list" >Tuesday: {tues}</p>
                        <p className="faq-list" >Wednesday: {wed}</p>
                        <p className="faq-list" >Thursday: {thurs}</p>
                        <p className="faq-list" >Friday: {fri}</p>
                        <p className="faq-list" >Saturday: {sat}</p>
                        <p className="faq-list" >Sunday: {sun}</p>
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Contact;