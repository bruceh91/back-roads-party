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

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/eventPlanning" component={eventPlan} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute path="/goodbye" component={Goodbye} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;