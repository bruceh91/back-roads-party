import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';

class Details extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prodID: this.props.match.params.id,
            productData: [],
            pictureList: []
        }
    }

    componentDidMount() {
        
        fetch(`/api/products/${this.state.prodID}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ productData: responseJson })
            })

        fetch(`/api/pictures/${this.state.prodID}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ pictureList: responseJson })
            })
    }

    render() {
        let image = this.state.productData.image;
        return (
            <Fragment>
                <h1>details page</h1>
                <br />
                <p>{this.state.productData.name}</p>
                <p>{this.state.productData.description}</p>
                <p>{this.state.productData.quantity}</p>
                <p>{this.state.productData.length}</p>
                <p>{this.state.productData.width}</p>
                <p>{this.state.productData.maxpeople}</p>
                <img src={image} alt="main-image"/>
                {console.log(this.state.pictureList)}
                {this.state.pictureList.map((x, index) => {
                    return (
                        <div key={index}>
                            <h5>id = {x.id}</h5>
                            <h5>product_id = {x.product_id}</h5>
                            <img src={x.pic_url} alt="other photo"/>
                        </div>
                    )
                })}
            </Fragment>
            
        )
    }
}

export default Details;