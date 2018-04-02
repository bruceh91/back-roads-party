import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Carousel from './carousel';
import Featured from './featuredProducts';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productsList: []
        }
    }

    

    render() {
        return (
            <Fragment>
                    <div className='home-header-container w-100 d-flex align-items-center pt-5'>
                        <div className='home-header-car w-50'>
                            <Carousel />
                        </div>
                        <div className='home-header-text w-50 p-3'>
                            <h3 className='text-center' >our story</h3>
                            <p className='text-center'><small>Back Roads Party Co. was made Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. </small></p>
                        </div>
                    </div>
                    <Featured />
            </Fragment>
                );
            }
}