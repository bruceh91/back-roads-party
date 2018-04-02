import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

export default class planDate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: '',
            startDate: '',
            endDate: ''
        }
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }

    componentDidMount() {

        ///////         gets current day          ////////
        var today = new Date();
        let month = today.getMonth() + 1
        if (month < 10) {
            month = '0' + month;
        }
        let day = today.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        let year = today.getFullYear();
        let date = `${month}/${day}/${year}`
        this.setState({ date: date })

    }

    handleStartChange(event) {
        this.setState({startDate: event.target.value});
      }

    handleEndChange(event) {
        this.setState({endDate: event.target.value});
      }

    render() {
        return (
            <Fragment>
                <div className='pt-5' >
                    <h1>event planning</h1>
                    <h1>When is the event?</h1>
                </div>

                <div>
                    <div>
                        <p>start date (mm/dd/yyy)</p>
                        <input type="text" value={this.state.startDate} onChange={this.handleStartChange} placeholder={this.state.date} />
                    </div>
                    <div>
                        <p>end date (mm/dd/yyyy)</p>
                        <input type="text" value={this.state.endDate} onChange={this.handleEndChange} placeholder={this.state.date} />
                    </div>
                </div>

                
            </Fragment>
        );
    }
}