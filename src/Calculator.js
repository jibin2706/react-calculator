import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: null,
      result: 0
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    const nextValue = e.target.innerHTML;
    if (nextValue === '=') {
      this.setState(prevState => ({ display: parseFloat(eval(prevState.display).toFixed(3)) }));
      return;
    }

    if (nextValue === 'C') {
      this.setState(prevState => ({ display: null }));
      return;
    }

    this.setState(prevState => {
      if (prevState.display == null || prevState.display == '0') {
        return { display: nextValue };
      }
      return { display: prevState.display + nextValue };
    });
    console.log(e.target.innerHTML);
  }

  render() {
    return (
      <div className="calculator">
        <Display display={this.state.display} />
        <div className="keypad">
          <Button
            onButtonClick={e => this.onButtonClick(e)}
            type="clear"
            size="expand"
          >
            C
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="clear">
            %
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="operation">
            /
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="number">
            7
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="number">
            8
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="number">
            9
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="operation">
            *
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="number">
            4
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="number">
            5
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="number">
            6
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="operation">
            -
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="number">
            1
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="number">
            2
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="number">
            3
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="operation">
            +
          </Button>
          <Button
            onButtonClick={e => this.onButtonClick(e)}
            type="number"
            size="expand"
          >
            0
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="number">
            .
          </Button>
          <Button onButtonClick={e => this.onButtonClick(e)} type="operation">
            =
          </Button>
        </div>
      </div>
    );
  }
}
