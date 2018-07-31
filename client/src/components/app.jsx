import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from '../auth/privateRoute';
import Login from '../auth/login';
import Logout from '../auth/logout';
import AuthButton from '../auth/authButton';
import Home from './home';
import GoodbyeWorld from './goodbye';
import NavBar from './navBar';
import Rentals from './rentals';
import eventPlan from './eventPlan';
import Goodbye from './goodbye';
import Details from './details';
import Faq from './faq';
import Contact from './contact';
import Test from './Test';
import AHome from './admin/adminHome'; 
import AddProduct from './admin/adminAddProduct';
import UpdateProducts from './admin/adminUpdateProducts';
import ChangeFAQ from './admin/adminChangeFaq';
import AddRental from './admin/adminAddRental';
import UpdateProduct from './admin/adminUpdateProduct';
import UpdateGallery from './admin/adminUpdateGallery';
import UpdateCarousel from './admin/adminUpdateCarousel';
import UpdateParallax from './admin/adminUpdateParallax';
import ChangeFeatured from './admin/adminChangeFeatured';
import ChangeHomeText from './admin/adminChangeHomeText';

import Venues from './venues';
import Gallery from './gallery';


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    routes() {
            return (
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/details/:id" component={Details} />
                        <Route path="/test" component={Test} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/venues" component={Venues} /> 
                        <Route path="/gallery" component={Gallery} />

                            {/*    Admin section    */}
                        <PrivateRoute path="/adminhome" component={AHome} />
                        <PrivateRoute path="/adminaddrental" component={AddRental} />
                        <PrivateRoute path="/adminaddproduct" component={AddProduct} />
                        <PrivateRoute path="/adminupdateproducts" component={UpdateProducts} />
                        <PrivateRoute path="/adminupdategallery" component={UpdateGallery} />
                        <PrivateRoute path="/adminchangefaq" component={ChangeFAQ} />
                        <PrivateRoute path="/adminproduct/:id" component={UpdateProduct} />
                        <PrivateRoute path="/adminupdatecarousel" component={UpdateCarousel} />
                        <PrivateRoute path="/adminupdateparallax" component={UpdateParallax} />
                        <PrivateRoute path="/adminchangefeatured" component={ChangeFeatured} />
                        <PrivateRoute path="/adminchangehometext" component={ChangeHomeText} />

                    </Switch>
                </div>
            )
    }

    render() {
        return (
            <Router>
                <Fragment>
                    {this.routes()}
                </Fragment>
            </Router>
        )
    }
}


export default Navigation;