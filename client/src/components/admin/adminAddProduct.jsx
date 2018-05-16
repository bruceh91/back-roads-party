import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { post } from '../../services/base';


class AdminAddProduct extends Component {

    constructor(props) {
        super(props);
    }

    handleProductAddition(name, price, description, quantity, length, width, height, maxpeople) {
        let data = {
            name,
            price,
            description,
            quantity,
            length,
            width,
            height,
            maxpeople
        }
        post(`/api/products`, data);
        alert(`the product ${name} was added`);
        window.location.reload()
    }

    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <div className="pt-5" >
                    <h1 className="pt-5" >
                        Add products here
                    </h1>
                    <ul>
                        <hr/>
                        <li>
                            name: <input id="name" type="text"/>
                        </li>
                        <hr/>
                        <li>
                            price: <input id="price" type="text"/>
                        </li>
                        <hr/>
                        <li>
                            description: <input id="description" type="text"/>
                        </li>
                        <hr/>
                        <li>
                            quantity: <input id="quantity" type="text"/>
                        </li>
                        <hr/>
                        <li>
                            length: <input id="length" type="text"/>ft
                        </li>
                        <hr/>
                        <li>
                            width: <input id="width" type="text"/>ft
                        </li>
                        <hr/>
                        <li>
                            height: <input id="height" type="text"/>ft
                        </li>
                        <hr/>
                        <li>
                            max people: <input id="max" type="text"/>
                        </li>
                        <hr/>
                    </ul>
                    <div>
                        <h1> add pictures here</h1>
                        <script src="https://sdk.amazonaws.com/js/aws-sdk-2.241.1.min.js"></script>
                    </div>
                    <button onClick={() => this.handleProductAddition(
                        document.getElementById("name").value,
                        document.getElementById("price").value,
                        document.getElementById("description").value,
                        document.getElementById("quantity").value,
                        document.getElementById("length").value,
                        document.getElementById("width").value,
                        document.getElementById("height").value,
                        document.getElementById("max").value
                    )}>add product</button>
                </div>
            </Fragment>
        )
    }
}

export default AdminAddProduct;