import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Carousel from './carousel';
import Featured from './featuredProducts';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            parallax1: "",
            parallax2: ""
        }
    }

    componentDidMount() {
        fetch(`/api/pictures/parallax`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ parallax1: responseJson[0], parallax2: responseJson[1] })
            });
    }



    render() {
        // backgroundImage: "url(" + { Background } + ")"
        let para1 = {backgroundImage: `url(${this.state.parallax1.picture})`}
        let para2 = {backgroundImage: `url(${this.state.parallax2.picture})`}
        return (
            <Fragment>
                <div id="para1"className="top-logo parallax" style={para1}>
                    <img className='top-logo-pic mt-2 mr-1' src="https://s3.us-east-2.amazonaws.com/back-roads-party/small_logo_trans.png" alt='logo' />
                    <h4>weddings, tents, inflatables, and venue rentals </h4>
                </div>
                <div className='home-header-container w-100 align-items-center'>
                <div className='home-header-car' >
                        <Carousel />
                    </div>
                    <div id="para2" className='home-header-text parallax mt-4' style={para2}>
                        <div id="story-div" className="ml-5" ></div>
                        <h3 className='text-center pt-5 story' >our story</h3>
                        <p className='text-center mt-3 story p-5'>
                            <strong>
                                Back Roads Party Co. was made Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. 
                            </strong>
                        </p>
                    </div>
                </div>
                <Featured />
            </Fragment>
        );
    }
}