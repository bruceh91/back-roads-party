import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectUser } from '../store/actions/actionIndex';


class Test extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        if(!this.props.activeUser){
            return (
                    <div>
                        <h1>This is a test!</h1>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1>test test test test test</h1>
        
                        <hr />
                        <h1>user names: </h1>
                        <ul>
                            {this.props.users.map((x, index) => {
                                return (
                                        <li key={index} onClick={() => this.props.selectUser(x)}>user name: {x.name} </li>
                                )
                            })}
                        </ul>
                        <hr />
                        <h1>no user selected</h1>
                    </div>
            );
        } else {

        return (
            <div>
                <h1>This is a test!</h1>
                <br />
                <br />
                <br />
                <br />
                <h1>test test test test test</h1>

                <hr />
                <h1>user names: </h1>
                <ul>
                    {this.props.users.map((x, index) => {
                        return (
                                <li key={index} onClick={() => this.props.selectUser(x)}>user name: {x.name} </li>
                        )
                    })}
                </ul>
                <hr />
                <h1>user selected: </h1>
                <h1>selected name: {this.props.activeUser.name}</h1>
                <h3>selected age: {this.props.activeUser.age}</h3>





            </div>
        )}
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        activeUser: state.activeUser
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);