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
import Test from './Test';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'bababababababa'
        }
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" render={() => (<Home />)} />
                        <Route path="/rentals" render={() => (<Rentals />)} />
                        <Route path="/eventPlanning" render={() => (<EventPlan />)} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" render={() => (<Logout />)} />
                        <Route path="/details/:id" render={() => (<Details stuff={this.state.user} />)} />
                        <Route path="/test" component={Test} />
                        <PrivateRoute path="/goodbye" component={Goodbye} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}


export default Navigation;