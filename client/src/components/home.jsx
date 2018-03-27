import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Featured from './featuredProducts';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <h1>Home</h1>
                <Featured />
            </Fragment>
        );
    }
}