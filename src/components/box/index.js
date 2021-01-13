import React from 'react'
import './styles.css'
import translate from '../../translation-library/translate'

const Box = ({ text, number, num }) => {
    console.log(num);
    const translatedText = translate.use().ticketStatus[num]({ status: text })
    return (
        <div key="1" className="box">
            <span class="text">{translatedText}</span><span class="number">{number}</span>
        </div>
    )
}

export default Box
