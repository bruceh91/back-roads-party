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
                <div className='pt-5 text-center'>
                    <h1>all the rules and policies</h1>
                    <div className="pt-3 w-75 mx-auto faq-div flex-wrap picture-shadow pb-3">
                        {this.state.rulesList.map((x, index) => {
                            return (
                                <div key={index}>
                                <h5 className="faq-list" >{index + 1}. {x.rule}</h5>
                                <hr className="w-75" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            
                <div className='text-center mt-5'>
                    <h1> Here are all the frequently asked questions</h1>
                    <div className="pt-3 faq-div mx-auto w-75 flex-wrap picture-shadow pb-3">
                    {this.state.faqList.map((x, index) => {
                            return (
                                <div key={index}>
                                <h5 className="faq-list" >{x.question}: {x.answer}</h5>
                                <hr className="w-75" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Faq;