import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { put } from '../../services/base';



class AdminChangeFeatured extends Component {
    constructor(props) {
        super(props);

        this.state = {
            featuredList: [],
            productsList: [],
            selected: {},
            new: {}
        }
    }


    componentDidMount() {
        fetch(`/api/featuredProducts`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ featuredList: responseJson })
            })

        fetch(`/api/products`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ productsList: responseJson })
            });

    }

    handleTextChange(id, text) {
        console.log(text.length);
        if (text.length >= 201) {
            alert("the text is too long, try something shorter")
        } else {
            let data = {
                featured_text: text
            }
            put(`api/featuredProducts/${id}`, data);
            window.location.reload();
        }
    }

    handleChange(oldObj, newObj) {
        let oldData = {
            featured: "10"
        }
        let newData = {
            featured: oldObj.featured
        }
        put(`api/featuredProducts/${oldObj.id}`, oldData);
        put(`api/featuredProducts/${newObj.id}`, newData);
        window.location.reload();
    }

    changeSelected(id) {
        let product = this.state.productsList.find((obj) => { return obj.id === id });
        this.setState({ selected: product })
    }

    selectNew(obj) {
        this.setState({ new: obj });
    }



    render() {
        return (
            <Fragment>
                <div className="pt-5" >
                    <h1 className="pt-5" >
                        Update featured here
                    </h1>
                    <hr />
                    <div className="d-flex flex-wrap">
                        {this.state.featuredList.map((x, index) => {
                            let url = `/details/${x.id}`
                            return (
                                <div className="featured-card card m-1 picture-shadow" key={index}>
                                    <div >
                                        <img className="card-img-top" src={x.image} alt={x.name} />
                                        <div className="card-body text-center g-white">
                                            <h5 className="card-title">{x.name}</h5>
                                            <p className="card-text"><small>{x.featured_text}</small></p>
                                            <a className="btn text-success mt-4" data-toggle="modal" data-target={".featured-edit-modal" + index}><strong>CHANGE THE TEXT</strong></a>
                                            <a className="btn text-danger" onClick={() => this.changeSelected(x.id)} data-toggle="modal" data-target={".featured-replace-modal"}><strong>CHANGE THIS PRODUCT</strong></a>
                                        </div>
                                    </div>
                                    {/* edit text modal */}
                                    <div>
                                        <div className={"modal fade featured-edit-modal" + index} tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-lg" role="document">
                                                <div className="modal-content">
                                                    <hr />
                                                    <img className="w-50 mx-auto" src={x.image} alt={x.name} />
                                                    <p className="card-text mt-1">text: {x.featured_text}</p>
                                                    <input id={"text-input" + index} className="form-control input-lg mb-2 mt-1" type="text" placeholder="new featured text (200 letter max)" />
                                                    <button onClick={() => this.handleTextChange(x.id, document.getElementById("text-input" + index).value)}>update text</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {/* change product modal */}
                        <div>
                            <div className={"modal fade featured-replace-modal"} tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="d-flex flex-wrap">
                                            {/* old featured */}
                                            <div className="w-50">
                                                <div className="card-body text-center g-white">
                                                    <h5 className="card-title text-danger">old featured</h5>
                                                    <img className="card-img-top" src={this.state.selected.image} alt={this.state.selected.name} />
                                                    <div className="card-body text-center g-white w-100">
                                                        <h5 className="card-title">{this.state.selected.name}</h5>
                                                        <p className="card-text"><small>{this.state.selected.featured_text}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* new featured */}
                                            <div className="w-50">
                                                <div className="card-body text-center g-white">
                                                    <h5 className="card-title text-success">replacement featured</h5>
                                                    <img className="card-img-top" src={this.state.new.image} alt={this.state.new.name} />
                                                    <div className="card-body text-center g-white">
                                                        <h5 className="card-title">{this.state.new.name}</h5>
                                                        <p className="card-text"><small>{this.state.new.featured_text}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="bg-warning" onClick={() => this.handleChange(this.state.selected, this.state.new)}>CONFIRM CHANGES (this can't be undone)</button>
                                        {/* list of product options */}
                                        <hr />
                                        <div className="d-flex flex-wrap">
                                            {this.state.productsList.map((x, index) => {
                                                return (
                                                    <div key={index} className="m-2 border" width="100px" onClick={() => this.selectNew(x)} >
                                                        <img className="card-img-top mx-auto featured-replace-thumb" src={x.image} alt={x.name} />
                                                        <div className="card-body text-center g-white featured-replace-thumb">
                                                            <h5 className="card-title">{x.name}</h5>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </Fragment>
        )
    }
}

export default AdminChangeFeatured;