import React from 'react'

const Button = ({ handleClick, name, disabled }) => (
    <button
        onClick={(e) => handleClick()}
        disabled={disabled}>
        {name}
    </button>
)

export default Button
