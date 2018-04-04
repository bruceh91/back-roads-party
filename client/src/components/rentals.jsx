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
            date: '',
            search: ''
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCatChange = this.handleCatChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({search: 6});
        console.log('attempt get')
        fetch(`/api/products/${this.state.search}`)
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
        this.setState({ date: event.target.value })
    }

    handleCatChange(num) {
        console.log(num);
        this.setState({search: num})
        fetch(`/api/products/${this.state.search}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ productsList: responseJson })
            })
            // .then(() => {this.forceUpdate()})
        // this.forceUpdate();
    }

    render() {
        return (
            <Fragment>
                <RentalsCatBar onCatChange={this.handleCatChange}/>
                <div className='rentals-info-box g-mint g-grey-border' >
                    <h2 className='text-center mt-2' >{this.state.pName}</h2>
                    <p className='text-center m-1' ><big>{this.state.pDescription}</big></p>
                    <h6 className='text-center m-1' >size: <small>{this.state.pSize}</small></h6>
                    <h6 className='text-center m-1' >max people: <small>{this.state.pMax}</small></h6>
                    <h6 className='text-center m-1'>number available: <small>{this.state.pQuant}</small></h6>
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
                            <div className='rentals-head g-mint' onClick={() => this.handleClick(index)} key={index}>
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