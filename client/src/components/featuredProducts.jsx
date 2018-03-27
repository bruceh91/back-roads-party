import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Featured extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productsList: []
        }
    }

    // componentDidMount() {                         //// add featured bool to db to find featured products
    //     console.log('attempt get')
    //     fetch(`/api/products`)
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState({productsList: responseJson})
    //         })
    // }
    
    render() {
        console.log(this.state.productsList)
        return (
            <h1>featured products</h1>
        );
    }
}