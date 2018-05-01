import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';


export default class AHome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productsList: []
        }
    }

    

    render() {
        return (
            <Fragment>
                    <h1>Home Page</h1>
            </Fragment>
                );
            }
}