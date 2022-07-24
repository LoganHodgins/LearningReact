import {Fragment, Component } from "react";
import Button from "./Button";

class Calculator extends Component {
  render() {
    return (
      <Fragment>
        <div><Button text={'7'}/><Button text={'8'}/><Button text={'9'}/></div>
        <div><Button text={'4'}/><Button text={'5'}/><Button text={'6'}/></div>
        <div><Button text={'1'}/><Button text={'2'}/><Button text={'3'}/></div>
      </Fragment>
    );
  }
}

export default Calculator;