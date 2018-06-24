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
import Venues from './venues';
// import AddRental from './admin/adminAddRental';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    routes() {
        if (this.state.loggedIn === false) {
            return (
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/rentals" component={Rentals} />
                        {/* <Route path="/eventPlanning" render={() => (<EventPlan />)} /> */}
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/details/:id" component={Details} />
                        <Route path="/test" component={Test} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/venues" component={Venues} /> 
                        {/* <PrivateRoute path="/goodbye" component={Goodbye} /> */}

                            {/*    Admin section    */}

                        <Route path="/adminhome" component={AHome} />
                        <Route path="/adminaddrental" component={AddRental} />
                        <Route path="/adminaddproduct" component={AddProduct} />
                        <Route path="/adminupdateproducts" component={UpdateProducts} />
                        <Route path="/adminchangefaq" component={ChangeFAQ} />
                        <Route path="/adminproduct/:id" component={UpdateProduct} />
                    </Switch>
                </div>
            )
        } else if (this.state.loggedIn === true) {
            return (
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Rentals} />
                    </Switch>
                </div>
            )
        }
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