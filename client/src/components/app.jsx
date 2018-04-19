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
                        {/* <PrivateRoute path="/goodbye" component={Goodbye} /> */}
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