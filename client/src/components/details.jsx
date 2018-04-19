import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';

class Details extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prodID: this.props.match.params.id,
            productData: []
        }
    }

    componentDidMount() {
        
        fetch(`/api/products/${this.state.prodID}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ productData: responseJson })
            })
    }

    render() {
        return (
            <Fragment>
                <h1>Goodbye! World!</h1>
                <br />
                <p>{this.state.productData.name}</p>
                <p>{this.state.productData.description}</p>
                <p>{this.state.productData.quantity}</p>
                <p>{this.state.productData.length}</p>
                <p>{this.state.productData.width}</p>
                <p>{this.state.productData.maxpeople}</p>
            </Fragment>
        )
    }
}

export default Details;