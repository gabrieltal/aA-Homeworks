import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: ""
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.performOp = this.performOp.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    e.preventDefault();
    this.setState({num1: parseInt(e.target.value) });
  }

  setNum2(ev) {
    ev.preventDefault();
    this.setState({num2: parseInt(ev.target.value) });
  }

  performOp(e) {
    e.preventDefault();
    let num1 = this.state.num1;
    let num2 = this.state.num2;

    switch (e.target.id) {
      case '+':
        this.setState({result: num1 + num2})
        break;
      case "-":
        this.setState({result: num1 - num2})
        break;
      case "/":
        this.setState({result: num1 / num2})
        break;
      case "*":
        this.setState({result: num1 * num2})
        break;
      default:
        break;
    }
  }

  clear() {
    this.setState({
      result: "",
      num1: "",
      num2: ""
    })
  }

  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <h2>Num1: {this.state.num1}</h2>
        <input onChange={this.setNum1} value={this.state.num1}/>
        <h2>Num2: {this.state.num2}</h2>
        <input onChange={this.setNum2} value={this.state.num2}/>
        <button onClick={this.performOp} id="+">+</button>
        <button onClick={this.performOp} id="-">-</button>
        <button onClick={this.performOp} id="/">/</button>
        <button onClick={this.performOp} id="*">*</button>
        <h2>Result: {this.state.result}</h2>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
