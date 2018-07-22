import React, { Component } from 'react';
import { render } from 'react-dom';

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pictureList: []
        }
    }

    componentDidMount() {
        fetch(`/api/pictures/gallery`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ pictureList: responseJson })
            });
    }

    render() {
        // console.log(this.props)
        return (
            <div className="pt-5 pb-5">
                <h1 className="text-center">Picture Gallery</h1>
                <hr />
                <div className="d-flex flex-wrap justify-content-around">
                    {this.state.pictureList.map((x, index) => {
                        let target = `.pictures-modal${index}`;
                        return (
                            <div key={index} className="ml-1 mt-3">
                                <div>
                                    <img src={x.image} className="gallery-image text-shadow" alt="other photo" data-toggle="modal" data-target={target} />
                                </div>
                            </div>
                        )
                    })}
                    {this.state.pictureList.map((x, index) => {
                        let target = `modal fade pictures-modal${index}`;
                        return (
                            <div key={index} className={target} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby={target} aria-hidden="true">
                                <div className="modal-dialog modal-lg w-100" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <img src={x.image} className="d-block c-image mx-auto" alt="other photo" data-toggle="modal" data-target=".pictures-modal" />
                                            <hr />
                                            <p className="text-center" >{x.text}</p>
                                            <hr />
                                            <div className="mt-5 pt-5">
                                                <div className="mt-5" >
                                                    <ol className="carousel-indicators flex-wrap mb-5">
                                                    <img data-target="#carouselControls" data-slide-to="0" className='preview-image active invisible' src="https://opengameart.org/sites/default/files/Transparency500.png" alt="invisible" />

                                                        {this.state.pictureList.map((x, index) => {
                                                            return (
                                                                <img key={index} data-target="#carouselControls" data-slide-to={index + 1} className='preview-image' src={x.image} alt={x.id} />
                                                            )
                                                        })}
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
        )
    }
}

// picture in modale messed updateLocale, you need to make a carousel with all picture show up when you click on any picture in the gallery

export default Gallery;