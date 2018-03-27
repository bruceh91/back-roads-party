import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
// import Calender from 'react-calendar';     ////https://www.npmjs.com/package/react-calendar
import Featured from './featuredProducts';

export default class Rentals extends Component {

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
            })
    }

    render() {
        return (
            <Fragment>
                <h1>Rentals</h1>
                <div className='rentals-info-box' >
                    <h2>info</h2>
                    <h3>name when clicked</h3>
                    <h4>description</h4>
                    <h5>size</h5>
                    <h5>quantity</h5>
                    <div className='calender-div'>
                        {/* <Calender /> */}
                        <p>calendar here</p>
                    </div>
                </div>
                {this.state.productsList.map((x, index) => {
                    return (
                        <div className='rentals-head' key={index}>
                            <img className='rentals-image' src={x.image} alt={x.name} height='250px' />
                            <div className='rentals-text-div' >
                                <h3 className='rentals-name' >{x.name}</h3>
                                <h4 className='rentals-description' >{x.description}</h4>
                            </div>
                        </div>
                    )
                })}

            </Fragment>
        );
    }
}