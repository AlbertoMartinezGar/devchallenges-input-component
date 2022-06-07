import React from 'react'

import './Input.css';

const Input = (props) => {
  const isError = props.error ? "error" : "";
  const isDisabled = props.disabled ? "disabled" : "";
  const iconStart = props.startIcon ? "icon-start" : "";
  return (
    <div className='input-container'>
      <label htmlFor="input" className={`${isError}`}>Label</label>
      {props.startIcon ? <span className="material-icons start">{props.startIcon}</span> : ""}
      <input 
        disabled={isDisabled} 
        placeholder={props.value ? props.value : "Placeholder"} 
        className={`${isError} ${iconStart} ${props.size ? props.size : "md"}`} 
      />
      {props.endIcon ? <span className="material-icons end">{props.endIcon}</span> : ""}
      <p className={`helper-text ${isError}`}>{props.helperText}</p>
    </div>
  )
}

export default Input