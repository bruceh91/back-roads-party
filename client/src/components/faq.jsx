import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Faq extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rulesList: [],
            faqList: []
        }
    }

    componentDidMount() {
        console.log('attempt rules get')
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

    render() {
        return (
            <Fragment>
                <div className='pt-5'>
                    <h1>all the rules and policies</h1>
                    <ol className="pt-5">
                        {this.state.rulesList.map((x, index) => {
                            return (
                                <li key={index}>{x.rule}</li>
                            )
                        })}
                    </ol>
                </div>
                <hr/>
                <div>
                    <h1> Here are all the frequently asked questions</h1>
                    <ul>
                    {this.state.faqList.map((x, index) => {
                            return (
                                <li key={index}>{x.question}: {x.answer}</li>
                            )
                        })}
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Faq;