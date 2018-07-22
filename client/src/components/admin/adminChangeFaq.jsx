import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { put, post, destroy } from '../../services/base';

class ChangeFAQ extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rulesList: [],
            faqList: []
        }
    }

    componentDidMount() {
        fetch(`/api/policy/rules`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ rulesList: responseJson })
            });
        fetch(`/api/policy/faq`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ faqList: responseJson })
            });
    }


    ///////  updates existing rules ////////////
    handleRulesUpdate(id, rule) {
        let data = {
            rule
        }

        put(`/api/policy/rules/${id}`, data);
        window.location.reload();
    }

    handleFaqUpdate(id, q, a) {
        let data = {
            q,
            a
        }

        put(`/api/policy/faq/${id}`, data);
        window.location.reload();
    }

    ///////   delete existing rule    ////////
    handleRulesDelete(id) {
        let data = {
            id
        }
        destroy(`/api/policy/rules`, data);
        window.location.reload();
    }

    handleFaqDelete(id) {
        let data = {
            id
        }
        destroy(`/api/policy/faq`, data);
        window.location.reload();
    }

    ////// adds new rules //////
    handleRulesAddition(rule) {
        let data = {
            rule
        }
        post(`/api/policy/rules`, data);
        window.location.reload();
    }

    handleFaqAddition(q, a) {
        let data = {
            q,
            a
        }
        post(`/api/policy/faq`, data);
        window.location.reload();
    }

    render() {
        return (
            <Fragment>
                <div className="pt-5" >
                    <hr />
                </div>
                <div>   
                <Link className="btn btn-warning float-right mr-5" to="adminHome" >HOME</Link>

                    <div>
                        <h3 className="text-center" >rules and policies</h3>
                        <ol>
                            {this.state.rulesList.map((x, index) => {
                                return (
                                    <li key={index + "R"} >
                                        <input id={index + "R"} className="rules-input mb-2" type="text" defaultValue={x.rule} />
                                        <button onClick={() => this.handleRulesUpdate(x.id, document.getElementById(index + "R").value)}>update</button>
                                        <button onClick={() => this.handleRulesDelete(x.id)}>delete</button>
                                        <br />
                                    </li>
                                )
                            })}
                            <li >
                                <input id="new-rule" className="rules-input mb-2" type="text" placeholder="new rule here" />
                                <button onClick={() => this.handleRulesAddition(document.getElementById("new-rule").value)}>add new rule</button>
                                <br />
                            </li>
                        </ol>
                    </div>
                    <hr/>
                    <div>
                        <h3 className="text-center" > frequently asked questions</h3>
                        <ul>
                            {this.state.faqList.map((x, index) => {
                                return (
                                    <li key={index + "QA"}>
                                        <input id={index + "Q"} className="faq-input mb-2" type="text" defaultValue={x.question} />
                                        :
                                        <input id={index + "A"} className="faq-input mb-2" type="text" defaultValue={x.answer} />
                                        <button onClick={() => this.handleFaqUpdate(x.id, document.getElementById(index + "Q").value, document.getElementById(index + "A").value)}>update</button>
                                        <button onClick={() => this.handleFaqDelete(x.id)}>delete</button>
                                        <br />
                                    </li>
                                )
                            })}
                            <li>
                                <input id="new-q" className="faq-input mb-2" type="text" placeholder="new question here" />
                                :
                                        <input id="new-a" className="faq-input mb-2" type="text" placeholder="new answer here" />
                                <button onClick={() => this.handleFaqAddition(document.getElementById("new-q").value, document.getElementById("new-a").value)}>add new faq</button>
                                <br />
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ChangeFAQ;