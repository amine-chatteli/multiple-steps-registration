import React from 'react'
import Button from '../button/index';
import { connect } from 'react-redux';
import { nextStep, previousStep, submit } from "../../redux/register/actions";
import { useHistory } from "react-router-dom";
import translate from '../../translation-library/translate';
import './styles.css'

const Buttons = ({ nextStep, previousStep, currentStep, value, error, submit }) => {
    let history = useHistory();
    const buttons = translate.use().buttons

    return (
        <div className="buttons">
            { currentStep !== 4 &&
                <Button
                    disabled={value.length === 0 || error}
                    name={buttons.next}
                    handleClick={nextStep}
                />}

            {
                currentStep !== 1 &&
                <Button
                    name={buttons.previous}
                    handleClick={previousStep}
                />
            }
            {
                currentStep == 4 &&
                <Button name={buttons.submit}
                    handleClick={() => {
                        submit()
                        history.push('/dash')
                    }} />
            }
        </div>
    )

}


const mapDispatchToProps = dispatch => ({
    nextStep: () => dispatch(nextStep()),
    previousStep: () => dispatch(previousStep()),
    submit: () => dispatch(submit())
})

const mapStateToProps = ({ registrationPage: { currentStep, steps } }) => ({
    currentStep: currentStep,
    value: steps[currentStep - 1].input.value,
    error: steps[currentStep - 1].input.error
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buttons)