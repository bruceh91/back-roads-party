import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

export default class Featured extends Component {

    constructor(props) {
        super(props);

        this.state = {
            featuredProductsList: []
        }
    }

    componentDidMount() {
        console.log('attempt featured get')
        fetch(`/api/featuredProducts`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ featuredProductsList: responseJson })
            })
    }

    render() {
        return (
            <Fragment>
                <h1>featured products</h1>
                <div className='d-flex flex-wrap justify-content-around'>
                {this.state.featuredProductsList.map((x, index) => {
                    let url = `/details/${x.id}`
                    return (

                        <div className="featured-card card mb-5 picture-shadow" key={index}>
                            <img className="card-img-top" src={x.image} alt={x.name} />
                            <div className="card-body text-center g-white">
                                <h5 className="card-title">{x.name}</h5>
                                <p className="card-text"><small>{x.featured_text}</small></p>
                                <a href={url} className="fp-button btn center-block">More Info</a>
                            </div>
                        </div>
                            )
                })}
                </div>
            </Fragment>
        );
    }
}