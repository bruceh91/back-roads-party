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
                    <a className="navbar-brand ml-4 d-flex" onClick={() => {this.onCatClick(6)}} href="#">
                        <img src="https://seeklogo.com/images/H/hand-logo-10C1271C98-seeklogo.com.png" width='30px' height='30px' alt="wedding-logo" />
                        <h5 className='ml-1 mt-2' >All</h5>
                    </a>
                    <a className="navbar-brand ml-1 d-flex" onClick={() => {this.onCatClick(2)}} href="#">
                        <img src="http://cdn.appshopper.com/icons/117/2073443_larger.png" width='30px' height='30px' alt="wedding-logo" />
                        <h5 className='ml-1 mt-2' >Weddings</h5>
                    </a>
                    <a className="navbar-brand ml-1 d-flex" onClick={() => {this.onCatClick(5)}} href="#">
                        <img src="https://images.emojiterra.com/mozilla/512px/1f3aa.png" width='30px' height='30px' alt="wedding-logo" />
                        <h5 className='ml-1 mt-2' >tents</h5>
                    </a>
                    <a className="navbar-brand ml-1 d-flex" onClick={() => {this.onCatClick(7)}} href="#">
                        <img src="https://www.svgrepo.com/show/61985/dining-room-furniture-of-a-table-with-chairs.svg" width='30px' height='30px' alt="wedding-logo" />
                        <h5 className='ml-1 mt-2' >seating</h5>
                    </a>
                    <a className="navbar-brand ml-1 d-flex" onClick={() => {this.onCatClick(1)}} href="#">
                        <img src="http://images.all-free-download.com/images/graphiclarge/jumping_castle_311242.jpg" width='30px' height='30px' alt="wedding-logo" />
                        <h5 className='ml-1 mt-2' >inflatables</h5>
                    </a>
                </nav>
            </Fragment>
        )
    }

}