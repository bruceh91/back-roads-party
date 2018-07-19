import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Venues extends Component {

    constructor(props) {
        super(props);

        this.state = {
            venuesList: [],
            picsList: []
        }
    }

    componentDidMount() {
        let tempId = 0
        fetch(`/api/products/venues`)
            .then((response) => response.json())
            .then((responseJson) => {
                tempId = responseJson[0].id
                this.setState({ venuesList: responseJson });
                fetch(`/api/pictures/${tempId}`)
                    .then((res) => res.json())
                    .then((resJson) => {
                        this.setState({ picsList: resJson })
                    })
            });

    }

    onPicClick(id) {
        console.log("clicked  " + id)
        fetch(`/api/pictures/${id}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ picsList: responseJson })
            })
        let product = this.state.venuesList.find((obj) => { return obj.id === id });
        document.getElementById("main-modal-image").src = product.image;
        document.getElementById("main-preview").src = product.image;

    }

    render() {
        return (
            <div>
                <h1 className="pt-5" >Venues</h1>
                <hr />
                {this.state.venuesList.map((x, index) => {
                    return (
                        <div className="d-flex" key={index}>
                            <img className="picture-shadow ml-3" src={x.image} alt={x.name} height="450px" onClick={() => { this.onPicClick(x.id) }} data-toggle="modal" data-target=".pictures-modal" />
                            <div className="g-white text-center m-5 picture-shadow" >
                                <h4>{x.name}</h4>
                                <hr />
                                <h6 className="p-3" >{x.description}</h6>
                                <h6>maximum number of guests: {x.maxpeople}</h6>
                            </div>
                        </div>
                    )
                })}

                <hr className="mt-5 mb-5" />
                <div className="d-flex flex-wrap" >
                {this.state.picsList.map((x, index) => {
                    return (
                        <div key={index}>
                            <img src={x.pic_url} alt={x.id} className="float-left m-2 mb-5 text-shadow" height="150px" onClick={() => { this.onPicClick(x.product_id) }} data-toggle="modal" data-target=".pictures-modal" />
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
                                        <img id="main-modal-image" className='d-block c-image mx-auto' src="" alt="main" value={this.state.picsList.length + 1} />
                                    </div>
                                    {this.state.picsList.map((x, index) => {
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
                            <div className="mt-5 pt-5">
                            <div className="mt-5" >
                            <ol className="carousel-indicators flex-wrap mb-5">
                                <img id="main-preview" data-target="#carouselControls" data-slide-to="0" className='gallery-image active' src="" alt="main" />
                                {this.state.picsList.map((x, index) => {
                                    return (
                                        <img key={index} data-target="#carouselControls" data-slide-to={index + 1} className='gallery-image' src={x.pic_url} alt={x.id} />
                                    )
                                })}
                            </ol>
                            </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Venues;

