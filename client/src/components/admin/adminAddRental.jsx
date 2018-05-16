import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class AddRental extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="pt-5" >
                    <h1 className="pt-5" >
                        Add Rental
                    </h1>
                </div>
            </Fragment>
        )
    }
}

export default AddRental;