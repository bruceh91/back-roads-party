import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

export default class Carousel extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item mx-auto active w-100">
                            <img className="d-block w-100" src="https://s3.us-east-2.amazonaws.com/selfietester/birmingham_1521137283509.jpeg" alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>welcome to BackRoads Party Co.</h5>
                                        <p>rent some of our stuff</p>
                                    </div>
                            </div>
                            <div className="carousel-item mx-auto w-100">
                                <img className="d-block w-100" src="https://s3.us-east-2.amazonaws.com/selfietester/birmingham_1521137283509.jpeg" alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                        <h5>some more stuff</h5>
                                        <p>rent some of our stuff tomorrow!!!</p>
                                    </div>
                            </div>
                            <div className="carousel-item mx-auto w-100">
                                <img className="d-block w-100" src="https://s3.us-east-2.amazonaws.com/selfietester/birmingham_1521137283509.jpeg" alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block">
                                        <h5>lots of pictures and junk</h5>
                                        <p>rent some of our stuff today!</p>
                                    </div>
                            </div>
                        </div>
                        {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a> */}
                    </div>
            </Fragment>
        )
    }
}