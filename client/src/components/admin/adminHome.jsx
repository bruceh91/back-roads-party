import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class AdminHome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <div className="pt-5 mb-5" >
                <Link className="btn btn-danger float-right mr-5" to="logout" >Log Out</Link>
                    <h1 className="pt-5 text-center" >Admin Home Page</h1>

                    {/* <hr/> */}
                    {/* <hr/> */}
                    {/* <h2><Link className="btn btn-lg btn-warning ml-5 mb-2" to="adminaddrental">Add Rental</Link></h2> */}

                    <hr />
                    <h2 className="text-center" >add, change, or remove products</h2>
                    <hr />
                    <h5 className="text-center" ><Link className="btn btn-lg btn-warning ml-5 mb-2 w-50 d-inline-block text-truncate" to="adminaddproduct" >Add Product</Link></h5>
                    <h5 className="text-center"><Link className="btn btn-lg btn-warning ml-5 mb-2 w-50 d-inline-block text-truncate" to="adminupdateproducts" >Update Products</Link></h5>

                    <hr />
                    <h2 className="text-center" >change how the site looks and rules</h2>
                    <hr />
                    <h5 className="text-center"><Link className="btn btn-lg btn-warning ml-5 mb-2 w-50 d-inline-block text-truncate" to="adminchangefaq" >Change FAQs and Rules</Link></h5>
                    <h5 className="text-center"><Link className="btn btn-lg btn-warning ml-5 mb-2 w-50 d-inline-block text-truncate" to="adminupdategallery" >Update Gallery</Link></h5>
                    <h5 className="text-center"><Link className="btn btn-lg btn-warning ml-5 mb-2 w-50 d-inline-block text-truncate" to="adminupdatecarousel" >Update Carousel<small>(slideshow on home page)</small></Link></h5>
                    <h5 className="text-center"><Link className="btn btn-lg btn-warning ml-5 mb-2 w-50 d-inline-block text-truncate" to="adminupdateparallax" >Update Parallax<small>(moving background picture on home page)</small></Link></h5>
                    <h5 className="text-center"><Link className="btn btn-lg btn-warning ml-5 mb-2 w-50 d-inline-block text-truncate" to="adminchangefeatured" >Change Featured<small>(products on the bottom of home page)</small></Link></h5>
                    <h5 className="text-center"><Link className="btn btn-lg btn-warning ml-5 mb-2 w-50 d-inline-block text-truncate" to="adminchangehometext" >Change home text and contact page</Link></h5>
                </div>
            </Fragment>
        )
    }
}

export default AdminHome;