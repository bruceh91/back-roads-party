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
            pictureList: [],
            pID: 0,
            pName: 'name when clicked',
            pDescription: 'description',
            pQuant: 'quantity',
            pSize: 'size',
            rentedQuan: 'yo',
            date: new Date(),
            newDate: new Date(),
            dateVal: '',
            search: 6

        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCatChange = this.handleCatChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('attempt get')
        fetch(`/api/products/category/${this.state.search}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ productsList: responseJson })
            });

    }

    handleClick(index) {
        this.setState({
            pID: this.state.productsList[index].id,
            pName: this.state.productsList[index].name,
            pDescription: this.state.productsList[index].description,
            pQuant: this.state.productsList[index].quantity,
            pSize: `${this.state.productsList[index].width}x${this.state.productsList[index].length}`
        })
    }

    handleDateChange(event) {
        let date = event.target.value;
        let dateObject = new Date(date);
        this.setState({ newDate: dateObject, dateVal: date });
    }

    handleCatChange(num) {
        console.log(num);
        this.setState({ search: num })
        fetch(`/api/products/category/${num}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ productsList: responseJson })
            })
    }

    handleButtonClick() {
        this.setState({ date: this.state.newDate });
    }

    getRentedQuan(quant) {
        if (quant != this.state.rentedQuan) {
            this.setState({ rentedQuant: quant });
            console.log(quant + '  new');
        }
    }

    onPicClick(id) {
        console.log("clicked  " + id)
        fetch(`/api/pictures/${id}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ pictureList: responseJson })
            })
        let product = this.state.productsList.find((obj) => { return obj.id === id });
        document.getElementById("main-modal-image").src = product.image;
        document.getElementById("modal-link").href = `/details/${id}`;
        document.getElementById("main-preview").src = product.image;

    }

    render() {
        return (
            <Fragment>
                <RentalsCatBar onCatChange={this.handleCatChange} />
                {/* <div className='rentals-info-box g-orange g-grey-border' >                      add this back after order tracking works
                    <h2 className='text-center mt-2' >{this.state.pName}</h2>
                    <p className='text-center m-1' ><big>{this.state.pDescription}</big></p>
                    <h6 className='text-center m-1' >size: <small>{this.state.pSize}</small></h6>
                    <Calender sendQuan={() => this.getRentedQuan()} dateSelected={this.state.date} prodId={this.state.pID} prodQuan={this.state.pQuant} />
                    <Link to={`/details/${this.state.pID}`} className='btn fp-button' >more details</Link>
                </div> */}
                <div className='rentals-container'>
                    {/* <div className='rentals-search-div'>
                        <h5 className='rentals-search-text'>type date here to see available products (mm/dd/yyyy)</h5>
                        <input className='rentals-input' type="text" onChange={this.handleDateChange} placeholder={this.state.dateVal} />
                        <button onClick={() => this.handleButtonClick()} >set date</button>
                    </div> */}
                    {this.state.productsList.map((x, index) => {
                        return (
                            //onClick={() => this.handleClick(index)}   used on main div for calender and info
                            <div className='rentals-head' key={index}>
                                {/* make shadow here */}
                                <img className='rentals-image w-50 float-left picture-shadow' src={x.image} alt={x.name} onClick={() => { this.onPicClick(x.id) }} data-toggle="modal" data-target=".pictures-modal" />
                                <div className='rentals-text-div w-50 float-right g-white pt-5 pb-5 mt-5' >
                                    <h3 className='rentals-name' >{x.name}</h3>
                                    <h5 className='rentals-description' >{x.description}</h5>
                                    <h6 className="text-center mx-auto mt-3" >Price:    {x.price}</h6>
                                    <div className="rentals-link">
                                        <a href={`/details/${x.id}`} className="rentals-link btn btn-info">more details</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* modal */}
                <div className="modal fade pictures-modal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <h3>Picture Gallery</h3>
                            <div id="carouselControls" className="carousel slide m-2" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img id="main-modal-image" className='d-block c-image mx-auto' src="" alt="main" value={this.state.pictureList.length + 1} />
                                    </div>
                                    {this.state.pictureList.map((x, index) => {
                                        return (
                                            <div key={index} className="carousel-item">
                                                <img className="d-block c-image mx-auto" src={x.pic_url} alt="x.id" value={index} />
                                            </div>
                                        )
                                    })}

                                </div>
                                <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <hr />
                            <ol className="carousel-indicators flex-wrap mb-5">
                                <img id="main-preview" data-target="#carouselControls" data-slide-to="0" className='gallery-image active' src="" alt="main" />
                                {this.state.pictureList.map((x, index) => {
                                    return (
                                        <img key={index} data-target="#carouselControls" data-slide-to={index + 1} className='gallery-image' src={x.pic_url} alt={x.id} />
                                    )
                                })}
                            </ol>
                            <hr />
                            <a id="modal-link" href="" className="rentals-link btn btn-info">more details</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}