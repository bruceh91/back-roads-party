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
            <div className="pt-5">
                <div className="d-flex flex-wrap">
                    {this.state.pictureList.map((x, index) => {
                        let target = `.pictures-modal${index}`;
                        return (
                            <div key={index} className="m-2">
                                <div>
                                    <img src={x.image} className="details-images text-shadow" alt="other photo" data-toggle="modal" data-target={target} />
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
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body mx-auto">
                                            <img src={x.image} className="details-images gallery-modal-image text-shadow " alt="other photo" data-toggle="modal" data-target=".pictures-modal" />
                                            <hr/>
                                            <p>{x.text}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
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

export default Gallery;