import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import RentalsCatBar from './rentalsComps/rentalsCatBar';


export default class Rentals extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productsList: [],
            pName: 'name when clicked',
            pDescription: 'description',
            pQuant: 'quantity',
            pSize: 'size',
            pMax: 'max recommended',
            date: ''
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('attempt get')
        fetch(`/api/products`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ productsList: responseJson })
            })
    }

    handleClick(index) {
        this.setState({
            pName: this.state.productsList[index].name,
            pDescription: this.state.productsList[index].description,
            pQuant: this.state.productsList[index].quantity,
            pSize: `${this.state.productsList[index].width}x${this.state.productsList[index].length}`,
            pMax: this.state.productsList[index].maxpeople
        })
    }

    handleDateChange(event) {
        this.setState({startDate: event.target.value});
      }

    render() {
        return (
            <Fragment>
                <RentalsCatBar />
                <div className='rentals-info-box' >
                    <h2 className='text-center' >{this.state.pName}</h2>
                    <p className='text-center' >{this.state.pDescription}</p>
                    <h5 className='text-center' >{this.state.pSize}</h5>
                    <h5 className='text-center' >{this.state.pMax}</h5>
                    <h5 className='text-center'>{this.state.pQuant}</h5>
                    <div className='calender-div'>
                        <p>calendar here</p>
                    </div>
                </div>
                <div className='rentals-container'>
                    <div className='rentals-search-div'>
                        <h5 className='rentals-search-text'>type date here to see available products (mm/dd/yyyy)</h5>
                        <input className='rentals-input' type="text" value={this.state.Date} onChange={this.handleDateChange} placeholder={this.state.date} />
                    </div>
                    {this.state.productsList.map((x, index) => {
                        return (
                            <div className='rentals-head' onClick={() => this.handleClick(index)} key={index}>
                                <img className='rentals-image' src={x.image} alt={x.name} height='250px' />
                                <div className='rentals-text-div' >
                                    <h3 className='rentals-name' >{x.name}</h3>
                                    <h4 className='rentals-description' >{x.description}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </Fragment>
        );
    }
}