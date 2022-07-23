import React from 'react';

import classes from './Input.module.css';

// need to wrap our component with React.forwardRef to
// allow us to use ref on our custom component.
const Input = React.forwardRef((props, ref) => {
  return <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} {...props.input}/>
  </div>
});

export default Input;