import React, { forwardRef } from 'react'
import Input from '../../components/input/index';

import './styles.css';
import Buttons from '../buttons';

const Form = () => {

    return (
        <div className="form">
            <Input />
            <Buttons />
        </div>

    )
}


export default Form;
