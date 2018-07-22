import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Carousel from './carousel';
import Featured from './featuredProducts';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            parallax1: "",
            parallax2: "",
            story: [{value: ""},{value: ""}]
        }
    }

    componentDidMount() {
        fetch(`/api/pictures/parallax`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ parallax1: responseJson[0], parallax2: responseJson[1] })
            });

        fetch(`/api/products/misc/misc`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ story: responseJson })
            });
    }



    render() {
        // backgroundImage: "url(" + { Background } + ")"
        let para1 = { backgroundImage: `url(${this.state.parallax1.picture})` }
        let para2 = { backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${this.state.parallax2.picture})` };
        let header = this.state.story[0].value;
        let text = this.state.story[1].value;
        return (
            <Fragment>
                <div id="para1" className="top-logo parallax" style={para1}>
                    <img className='top-logo-pic mt-2 mr-1' src="https://s3.us-east-2.amazonaws.com/back-roads-party/small_logo_trans.png" alt='logo' />
                    <h4>weddings, tents, inflatables, and venue rentals </h4>
                </div>
                <div className='home-header-container w-100 align-items-center'>
                    <div className='home-header-car' >
                        <Carousel />
                    </div>
                    <div id="para2" className='home-header-text parallax mt-4' style={para2}>
                        {/* <div id="story-div" className="ml-5" ></div> */}
                        <div >
                            <h3 className='text-center pt-5 story text-dark' >{header}</h3>
                            <p className='text-center mt-3 story p-5 text-dark'>
                                <strong>{text}</strong>
                            </p>
                        </div>
                    </div>
                </div>
                <Featured />
            </Fragment>
        );
    }
}