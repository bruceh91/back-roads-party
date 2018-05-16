import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class AdminHome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <div className="pt-5" >
                    <h1 className="pt-5" >
                        Click the links below to change things
                    </h1>
                </div>
                <br/>
                <br/>
                <h2><Link to="adminaddrental">add rental</Link></h2>
                <br/>
                <br />
                <h4><Link to="adminaddproduct" >add product</Link></h4>
                <br />
                <h4><Link to="adminupdateproducts" >update products</Link></h4>
                <br />
                <h4><Link to="adminchangefaq" >change faqs and rules</Link></h4>
                <br />
            </Fragment>
        )
    }
}

export default AdminHome;