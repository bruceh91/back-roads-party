import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import GoodbyeWorld from './goodbye';
import NavBar from './navBar';
import Rentals from './rentals';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    {/* <Link to="/goodbye">Goodbye</Link> */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/rentals" component={Rentals} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;