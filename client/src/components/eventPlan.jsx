import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import PlanDate from './eventPlanComps/planDate';
import PlanType from './eventPlanComps/planType';
import PlanNeeded from './eventPlanComps/planNeeded';

export default class EventPlan extends Component {

    constructor(props) {
        super(props);

        this.state = {
        
        }
        
    }

    render() {
        return (
            <Fragment>
                <PlanDate />
                <PlanType />
                <PlanNeeded />
            </Fragment>
        );
    }
}