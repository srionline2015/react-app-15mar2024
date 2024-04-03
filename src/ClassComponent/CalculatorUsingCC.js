import React, { Component } from "react";

class CalculatorUsingCC extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      total: 0
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  add = () => {
    this.setState({
      total: this.state.number1 + this.state.number2
    });
  };

  subtract = () => {
    this.setState({
      total: this.state.number1 - this.state.number2
    });
  };

  multiply = () => {
    this.setState({
      total: this.state.number1 * this.state.number2
    });
  };

  divide = () => {
    this.setState({
      total: this.state.number1 / this.state.number2
    });
  };

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <input
          type="number"
          name="number1"
          value={this.state.number1}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="number2"
          value={this.state.number2}
          onChange={this.handleChange}
        />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <p>Total: {this.state.total}</p>
      </div>
    );
  }
}

export default CalculatorUsingCC;