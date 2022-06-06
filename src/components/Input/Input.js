import React from 'react'

import './Input.css';

const Input = (props) => {
  const isError = props.error ? "error" : "";
  const isDisabled = props.disabled ? "disabled" : "";

  return (
    <div className='input-container'>
      <label htmlFor="input" className={`${isError}`}>Label</label>
      <input 
        disabled={isDisabled} 
        placeholder='sdasd' 
        className={`${isError}`} 
      />
      <p className={`helper-text ${isError}`}>{props.helperText}</p>
    </div>
  )
}

export default Input