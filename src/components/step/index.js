import React from 'react'
import './styles.css';
import translate from '../../translation-library/translate'


const Step = ({ name, number, active }) => {
    const steps = Object.values(translate.use().steps)
    const StepName = steps[number - 1]({ name: name })
    console.log(number,active);
    return (
        <li className="step active" >
            {number == 1 ?<div className={active ? "unique-first-step step-bar-active" : ""}></div>: <div className={active ? "step-bar step-bar-active" : "step-bar"}></div>}
            <div className={active ? "step-number step-number-active" : "step-number"}>{number}</div>
            <div className={active ? "step-name step-name-active" : "step-name"}>{StepName}</div>
        </li>
    )
}

export default Step
