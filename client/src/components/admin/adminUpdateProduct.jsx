import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { put } from '../../services/base';


class UpdateProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {}
        }
    }


    componentDidMount() {
        console.log('attempt get')
        fetch(`/api/products/${this.props.match.params.id}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ product: responseJson })
            });

    }

    handleClick(columnName, newValue) {

        fetch(`/api/products/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: new Headers({
                "content-type": "application/json"
            }),
            body: JSON.stringify({
                column: columnName,
                value: newValue
            })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
        });

        alert(`the item's "${columnName}" value has been updated to "${newValue}"`);

        window.location.reload();
    }

    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <div className="pt-5" >
                    <h1 className="pt-5" >
                        Update product here
                        <hr />
                        <div>
                            <hr />
                            <h3>name: {this.state.product.name}</h3>
                            <input id="name" type="text" placeholder="new name" />
                            <button onClick={() => this.handleClick("name", document.getElementById("name").value)}>update</button>
                            <hr />

                            <h3>ID: {this.state.product.id}</h3>
                            <h5>ID can't be changed</h5>
                            <hr />

                            <h4>price: {this.state.product.price}</h4>
                            <input id="price" type="text" placeholder="new price" />
                            <button onClick={() => this.handleClick("price", document.getElementById("price").value)}>update</button>
                            <hr />

                            <h4>description: {this.state.product.description}</h4>
                            <input id="description" type="text" placeholder="new description" />
                            <button onClick={() => this.handleClick("description", document.getElementById("description").value)}>update</button>
                            <hr />

                            <h4>quantity: {this.state.product.quantity}</h4>
                            <input id="quantity" type="text" placeholder="new quantity" />
                            <button onClick={() => this.handleClick("quantity", document.getElementById("quantity").value)}>update</button>
                            <hr />

                            <h4>length: {this.state.product.length}</h4>
                            <input id="length" type="text" placeholder="new length" />
                            <button onClick={() => this.handleClick("length", document.getElementById("length").value)}>update</button>
                            <hr />

                            <h4>width: {this.state.product.width}</h4>
                            <input id="width" type="text" placeholder="new width" />
                            <button onClick={() => this.handleClick("width", document.getElementById("width").value)}>update</button>
                            <hr />

                            <h4>height: {this.state.product.height}</h4>
                            <input id="height" type="text" placeholder="new height" />
                            <button onClick={() => this.handleClick("height", document.getElementById("height").value)}>update</button>
                            <hr />

                            <h4>max people: {this.state.product.maxpeople}</h4>
                            <input id="maxpeople" type="text" placeholder="new max people" />
                            <button onClick={() => this.handleClick("maxpeople", document.getElementById("maxpeople").value)}>update</button>
                            <hr />

                            <img src={this.state.product.image} alt={this.state.product.name} height='150px' />
                        </div>
                    </h1>

                </div>
            </Fragment>
        )
    }
}

export default UpdateProduct;