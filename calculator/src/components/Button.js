import { Component } from "react";
import classes from './Button.module.css';

class Button extends Component {
  render() {
    return (<button className={classes.button}>{this.props.text}</button>);
  }
}

export default Button;