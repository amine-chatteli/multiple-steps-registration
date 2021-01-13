import React from 'react'
import { connect } from 'react-redux'
import './styles.css'
import { enterData } from "../../redux/register/actions";
import translate from "../../translation-library/translate"

const Input = ({ inputData, enterData, value, currentStep }) => {
    const { input: { name, type, error, placeholder } } = inputData;
    //input name is same as step name so we are using the step name translation
    console.log(error);
    const steps = Object.values(translate.use().steps)
    const errors = Object.values(translate.use().errors)
    const inputPlaceholder = steps[currentStep - 1]({ name: placeholder })
    const translateError = errors[currentStep - 1]({ error: error })
    return (
        <div className="input">
            <input
                type={type}
                name={name}
                value={value}
                placeholder={inputPlaceholder}
                onChange={(e) => (enterData(e))}>
            </input>
           {error && <p className='error'>{translateError}</p>}
        </div>
    )
}
const mapDispatchToProps = dispatch => ({

    enterData: (e) => dispatch(enterData(e))
})
const mapStateToProps = ({ registrationPage: { steps, currentStep } }) => ({
    currentStep: currentStep,
    inputData: steps[currentStep - 1],
    value: steps[currentStep - 1].input.value
})
export default connect(mapStateToProps, mapDispatchToProps)(Input)
