import React, { Component, Fragment } from 'react';
import render from 'react-dom';

export default class planType extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(type) {
        this.setState({ type });
        console.log(this.state.type)
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h1>what Type of event is this?</h1>
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() => { this.handleChange('wedding') }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Wedding
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() => { this.handleChange('kids party') }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Kids Party
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() => { this.handleChange('other party') }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Other Party
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() => { this.handleChange('other event') }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Other Event
                                (all products will be shown)
                            </label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}