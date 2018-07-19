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
                document.getElementById("main-modal-image").src = responseJson.image;
                document.getElementById("main-preview").src = responseJson.image;
                this.setState({ productData: responseJson })
            })

        fetch(`/api/pictures/${this.state.prodID}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ pictureList: responseJson })
            })
    }

    isVenue() {
        if (this.state.productData.venue == 1) {
            return (
                <p>max people: {this.state.productData.maxpeople}</p>
            )
        }
    }

    render() {
        let image = this.state.productData.image;
        return (
            <Fragment>
                <div className="d-flex flex-wrap pt-5" >
                    <div className="mx-auto" >
                        <img src={image} className="details-main-image picture-shadow" alt="main-image" data-toggle="modal" data-target=".pictures-modal" />
                        <div className="text-center mt-4 picture-shadow g-white float-right pl-4 pr-5 pt-2 details-text-div">
                            <h3>{this.state.productData.name}</h3>
                            <p>{this.state.productData.description}</p>
                            <p>quantity: {this.state.productData.quantity}</p>
                            <p>size: {this.state.productData.length}x{this.state.productData.width}</p>
                            <p>price: ${this.state.productData.price} </p>
                            <p>total quantity: {this.state.productData.quantity}</p>
                            {this.isVenue()}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex flex-wrap mb-4" >
                    {this.state.pictureList.map((x, index) => {
                        return (
                            <div key={index} className="m-2">
                                <img src={x.pic_url} className="details-images text-shadow" alt="other photo" data-toggle="modal" data-target=".pictures-modal" />
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
                                        <img id="main-modal-image" className='d-block c-image mx-auto' src="" alt="main" />
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
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default Details;