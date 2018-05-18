import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class UpdateProducts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productsList: []
        }
    }

    componentDidMount() {
        console.log('attempt get')
        fetch(`/api/products`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ productsList: responseJson })
            });

    }

    handleClick(id) {
        window.location = `http://localhost:3000/adminproduct/${id}`
    }

    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <div className="pt-5" >
                    <h1 className="pt-5" >
                        Update products here
                    </h1>

                    {this.state.productsList.map((x, index) => {
                        return (
                            <div key={index}>
                            <hr/>
                                <div>
                                    <h3>name: {x.name}</h3>
                                    <h3>ID: {x.id}</h3>
                                    <h4>price: {x.price}</h4>
                                    <h4>description: {x.description}</h4>
                                    <h4>quantity: {x.quantity}</h4>
                                    <h4>length: {x.length}</h4>
                                    <h4>width: {x.width}</h4>
                                    <h4>height: {x.height}</h4>
                                    <h4>max people: {x.maxpeople}</h4>
                                    <img src={x.image} alt={x.name} height='150px' />
                                </div>
                                <button onClick={() => this.handleClick(x.id)}>EDIT</button>
                            </div>
                        )
                    })}

                </div>
            </Fragment>
        )
    }
}

export default UpdateProducts;