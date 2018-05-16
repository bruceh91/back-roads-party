import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class UpdateProducts extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <div className="pt-5" >
                    <h1 className="pt-5" >
                        Update products here
                    </h1>
                </div>
            </Fragment>
        )
    }
}

export default UpdateProducts;