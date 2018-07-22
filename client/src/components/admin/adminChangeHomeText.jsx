import React, { Component } from 'react';
import { put } from '../../services/base';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

class AdminChangeHomeText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            story: []
        }
    }

    componentDidMount() {
        fetch(`/api/products/misc/misc`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ story: responseJson })
            });
    }

    handleTextChange(name, value) {
        let data = {
            value
        }
        put(`api/products/misc/misc/${name}`, data);
        window.location.reload();
    }

    render() {
        // console.log(this.props)
        return (
            <div className="pt-5">
                <h1 className="text-center" >Change home text and contact page</h1>
                <Link className="btn btn-warning float-right mr-5 mt-4" to="adminHome" >HOME</Link>
                {this.state.story.map((x,index) => {
                    return (
                        <div key={index}>
                            <hr/>
                            <br/>
                            <h3>{x.name} : {x.value}</h3>
                            <br/>
                            <input id={"text-input" + index} className="form-control input-lg" type="text" placeholder="new gallery text" />
                                <button onClick={() => this.handleTextChange(x.name, document.getElementById("text-input" + index).value)}>update</button>
                            <br/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default AdminChangeHomeText;