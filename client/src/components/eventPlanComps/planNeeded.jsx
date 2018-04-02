import React, {Component, Fragment} from 'react';
import render from 'react-dom';

export default class PlanNeeded extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tent: false,
            inflatable: false
        }
    }

    handleTentChange(val) {
        this.setState({ tent: val });
        console.log(this.state.tent);
    }

    handleInflChange(val) {
        this.setState({ inflatable: val });
        console.log(this.state.inflatable);
    }

    render(){
        return (
            <Fragment>
                <h1>do you need a tent</h1>
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() => { this.handleTentChange('true') }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() => { this.handleTentChange('false') }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                no
                            </label>
                        </div>
                    </div>
                <h1>do you need an inflatable/bounce house?</h1>
                <div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() => { this.handleInfChange('true') }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() => { this.handleInfChange('false') }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                no
                            </label>
                        </div>
                    </div>
            </Fragment>
        )
    }



}