import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';


export default class RentalsCatBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
        }
    
    }

    render() {
        return (
            <Fragment>
                <nav className="rentals-cat navbar navbar-light bg-light d-flex justify-content-start">
                    <h4>categories</h4>
                    <a className="navbar-brand ml-2" href="#">
                        <img src="http://cdn.appshopper.com/icons/117/2073443_larger.png" width='40px' height='40px' alt="wedding-logo" />
                        Weddings
                    </a>
                    <a className="navbar-brand ml-1" href="#">
                        <img src="https://images.emojiterra.com/mozilla/512px/1f3aa.png" width='40px' height='40px' alt="wedding-logo" />
                        tents
                    </a>
                    <a className="navbar-brand ml-1" href="#">
                        <img src="https://www.svgrepo.com/show/61985/dining-room-furniture-of-a-table-with-chairs.svg" width='40px' height='40px' alt="wedding-logo" />
                        seating
                    </a>
                    <a className="navbar-brand ml-1" href="#">
                        <img src="http://images.all-free-download.com/images/graphiclarge/jumping_castle_311242.jpg" width='40px' height='40px' alt="wedding-logo" />
                        inflatables
                    </a>
                </nav>
            </Fragment>
        )
    }

}