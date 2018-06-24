import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Venues extends Component {

    constructor(props) {
        super(props);

        this.state = {
            venuesList: [],
            picsList: []
        }
    }

    componentDidMount() {
        fetch(`/api/products/venues`)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ venuesList: responseJson });
        });
    }

    render() {
        return (
            <div>
                <h1>Venues</h1>
                <br />
                <br />
                <br />
                <br />
                <h1>Venues</h1>
                <hr/>
                {this.state.venuesList.map((x, index) => {
                    return (
                        <div key={index}>
                            <h4>{x.name}</h4>
                            <h6>{x.description}</h6>
                            <img src={x.image} alt={x.name} height="350px" />
                            <Link to={`/details/${x.id}`} >more details</Link>
                            <hr/>
                        </div>
                    )
                })

                }
            </div>
        )
    }
}

export default Venues;