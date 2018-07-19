import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';


export default class RentalsCatBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
        }
        this.onCatClick = this.onCatClick.bind(this);
    }

    onCatClick(num) {
        this.props.onCatChange(num);
    } 

    render() {
        return (
            <Fragment>
                <nav className="rentals-bg-div g-grey" />
                <div className="rentals-bg-tri" />
                <nav className="rentals-cat navbar navbar-light g-grey d-flex justify-content-start">
                    <h4>categories</h4>
                    <a className="navbar-brand ml-4 d-flex" onClick={() => {this.onCatClick(6)}} >
                        <img src="https://s3.us-east-2.amazonaws.com/back-roads-party/farm_logo.png" width='30px' height='30px' alt="wedding-logo" />
                        <h5 className='ml-1 mt-2' >All</h5>
                    </a>
                    <a className="navbar-brand ml-1 d-flex" onClick={() => {this.onCatClick(2)}} >
                        <img src="https://s3.us-east-2.amazonaws.com/back-roads-party/wedding_logo.png" width='30px' height='30px' alt="wedding-logo" />
                        <h5 className='ml-1 mt-2' >Weddings</h5>
                    </a>
                    <a className="navbar-brand ml-1 d-flex" onClick={() => {this.onCatClick(5)}} >
                        <img src="https://s3.us-east-2.amazonaws.com/back-roads-party/tent_logo.png" width='30px' height='30px' alt="wedding-logo" />
                        <h5 className='ml-1 mt-2' >tents</h5>
                    </a>
                    <a className="navbar-brand ml-1 d-flex" onClick={() => {this.onCatClick(7)}} >
                        <img src="https://www.svgrepo.com/show/61985/dining-room-furniture-of-a-table-with-chairs.svg" width='30px' height='30px' alt="wedding-logo" />
                        <h5 className='ml-1 mt-2' >seating</h5>
                    </a>
                    <a className="navbar-brand ml-1 d-flex" onClick={() => {this.onCatClick(1)}} >
                        <img src="https://s3.us-east-2.amazonaws.com/back-roads-party/bouncyhouse_logo.png" width='30px' height='30px' alt="wedding-logo" />
                        <h5 className='ml-1 mt-2' >inflatables</h5>
                    </a>
                </nav>
            </Fragment>
        )
    }

}