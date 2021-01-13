import React from 'react';
import './styles.css';
import Step from '../step';
import { connect } from 'react-redux'


const Steps = ({ steps, currentStep }) => (
    <ul className="steps">
        {
            steps.map(step =>

                <Step key={step.number}
                    active={currentStep == step.number}
                    {...step}
                />)
        }
    </ul>
)

const mapStateToProps = ({ registrationPage: { steps, currentStep } }) => ({
    steps: steps,
    currentStep: currentStep
})
export default connect(mapStateToProps)(Steps)
