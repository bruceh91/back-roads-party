import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { destroy } from '../../services/base';


class UpdateProducts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productsList: [],
            venuesList: []
        }
    }

    componentDidMount() {
        console.log('attempt get')
        fetch(`/api/products`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ productsList: responseJson })
            });

        fetch(`/api/products/venues`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ venuesList: responseJson });
            });
    }

    handleClick(id) {
        window.location = `http://localhost:3000/adminproduct/${id}`
    }

    handleDeleteClick(id) {
        let data = {
            id
        }
        destroy(`/api/products/${id}`, data);
        destroy(`/api/products/cat/${id}`, data);
        window.location.reload();
    }

    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <div className="pt-5" >
                <Link className="btn btn-warning float-right mr-5" to="adminHome" >HOME</Link>
                    <h1 className="pt-5 text-center" >
                        Update products here
                    </h1>

                    {this.state.productsList.map((x, index) => {
                        return (
                            <div key={index}>
                                <hr />
                                <div className="text-center" >
                                    <img src={x.image} alt={x.name} height='250px' />
                                    <h3>name: {x.name}</h3>
                                    <h3>ID: {x.id}</h3>
                                    <h4>price: {x.price}</h4>
                                    <h4>description: {x.description}</h4>
                                    <h4>quantity: {x.quantity}</h4>
                                    <h4>length: {x.length}</h4>
                                    <h4>width: {x.width}</h4>
                                    <h4>height: {x.height}</h4>
                                    <h4>max people: {x.maxpeople}</h4>
                                </div>
                                <div className="text-center" >
                                    <button className="btn btn-lg bg-success m-2" onClick={() => this.handleClick(x.id)}>EDIT</button>
                                    <button className="btn btn-lg bg-danger m-2" onClick={() => this.handleDeleteClick(x.id)}>DELETE</button>
                                </div>
                            </div>
                        )
                    })}
                    <hr />
                    <h2 className="text-center" >Venues</h2>
                    {this.state.venuesList.map((x, index) => {
                        return (
                            <div key={index}>
                                <hr />
                                <div className="text-center" >
                                    <img src={x.image} alt={x.name} height='250px' />
                                    <h3>name: {x.name}</h3>
                                    <h3>ID: {x.id}</h3>
                                    <h4>price: {x.price}</h4>
                                    <h4>description: {x.description}</h4>
                                    <h4>quantity: {x.quantity}</h4>
                                    <h4>length: {x.length}</h4>
                                    <h4>width: {x.width}</h4>
                                    <h4>height: {x.height}</h4>
                                    <h4>max people: {x.maxpeople}</h4>
                                </div>
                                <div className="text-center" >
                                    <button className="btn btn-lg bg-success m-2" onClick={() => this.handleClick(x.id)}>EDIT</button>
                                    <button className="btn btn-lg bg-danger m-2" onClick={() => this.handleDeleteClick(x.id)}>DELETE</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </Fragment>
        )
    }
}

export default UpdateProducts;