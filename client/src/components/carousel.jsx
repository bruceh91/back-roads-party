import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

export default class Carousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pictureList: [],
            // carPics: []
        }
    }

    componentDidMount() {
        fetch(`/api/pictures/carousel`)
            .then((response) => response.json())
            .then((responseJson) => {
                let carArr = []
                responseJson.map((x, index) => {
                    if (index == 0) {
                        carArr.push(
                            <div key={index} className="carousel-item mx-auto active w-100">
                                <img className="d-block w-75 mx-auto" src={x.picture} alt={index} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{x.header}</h5>
                                    <p>{x.text}</p>
                                </div>
                            </div>
                        )
                    } else {
                        carArr.push(
                            <div key={index} className="carousel-item mx-auto w-100">
                                <img className="d-block w-75 mx-auto" src={x.picture} alt={index} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{x.header}</h5>
                                    <p>{x.text}</p>
                                </div>
                            </div>
                        )
                    }
                })
                this.setState({ pictureList: carArr })
            });
    }


    render() {
        return (
            <Fragment>
                <div id="carouselIndicators" className="carousel slide p-2" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {this.state.pictureList.map((x, index) => {
                            return (
                                <li key={index} data-target="#carouselIndicators" data-slide-to={index} className="active"></li>
                            )
                        })}
                    </ol>
                    <div className="carousel-inner">
                        {this.state.pictureList.map((x, index) => {
                            return (
                                x
                            )
                        })}
                    </div>
                </div>
            </Fragment>
        )
    }
}