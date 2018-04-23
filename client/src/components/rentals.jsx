import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import RentalsCatBar from './rentalsComps/rentalsCatBar';
import Calender from './rentalsComps/rentalsCalender';


export default class Rentals extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productsList: [],
            pID: 0,
            pName: 'name when clicked',
            pDescription: 'description',
            pQuant: 'quantity',
            pSize: 'size',
            pMax: 'max recommended',
            date: new Date(),
            newDate: new Date(),
            dateVal: '',
            search: 6,
            // selected: false
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCatChange = this.handleCatChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.setDate = this.setDate.bind(this);
    }

    componentDidMount() {
        // this.setState({search: 6});
        console.log('attempt get')
        fetch(`/api/products/category/${this.state.search}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ productsList: responseJson })
            })
    }

    handleClick(index) {
        this.setState({
            pID: this.state.productsList[index].id,
            pName: this.state.productsList[index].name,
            pDescription: this.state.productsList[index].description,
            pQuant: this.state.productsList[index].quantity,
            pSize: `${this.state.productsList[index].width}x${this.state.productsList[index].length}`,
            pMax: this.state.productsList[index].maxpeople
        })
    }

    handleDateChange(event) {
        let date = event.target.value;
        let dateObject = new Date(date);         //   'Tue Oct 08 1991 00:00:00 GMT-0500 (CDT)';
        this.setState({ newDate: dateObject, dateVal: date });
        // console.log(dateObject);
    }

    handleCatChange(num) {
        console.log(num);
        this.setState({ search: num })
        fetch(`/api/products/category/${this.state.search}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ productsList: responseJson })
            })
    }

    handleButtonClick() {
        // console.log('yo', this.state.selected);
        this.setState({ date: this.state.newDate });
    }

    render() {
        return (
            <Fragment>
                <RentalsCatBar onCatChange={this.handleCatChange} />
                <div className='rentals-info-box g-mint g-grey-border' >
                    <h2 className='text-center mt-2' >{this.state.pName}</h2>
                    <p className='text-center m-1' ><big>{this.state.pDescription}</big></p>
                    <h6 className='text-center m-1' >size: <small>{this.state.pSize}</small></h6>
                    <h6 className='text-center m-1' >max people: <small>{this.state.pMax}</small></h6>
                    <h6 className='text-center m-1'>number available: <small>{this.state.pQuant}</small></h6>
                    <Calender dateSelected={this.state.date} prodId={this.state.pID} />        
                    <p>{this.state.pID}</p>
                    <Link to={`/details/${this.state.pID}`} >more details</Link>
                </div>
                <div className='rentals-container'>
                    <div className='rentals-search-div'>
                        <h5 className='rentals-search-text'>type date here to see available products (mm/dd/yyyy)</h5>
                        <input className='rentals-input' type="text" onChange={this.handleDateChange} placeholder={this.state.dateVal} />
                        <button onClick={() => this.handleButtonClick()} >set date</button>
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