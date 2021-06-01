import React from 'react';
import './ActionNumber.css';

export default class ActionNumber extends React.Component  {

  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.render = this.render.bind(this);
    this.dec = this.dec.bind(this);
    this.inc = this.inc.bind(this);
  }

  inc() {
    const startValue = this.state.value;
    const newValue = startValue + 1;
    this.setState({value: newValue});
    this.props.updateValue(this.props.label, newValue);
  }

  dec() {
    const startValue = this.state.value;
    const newValue = startValue - 1;
    this.setState({value: newValue});
    this.props.updateValue(this.props.label, newValue);
  }

  render(){
      return(
        <div className="action-number">
            <label>{ this.props.label }</label>
            <div className="left">
              <input type="number" className="action-input action-number-input" value={this.state.value} onChange={this.props.updateValue}></input>
            </div>
            <div className="right">
              <div className="action-inc" onClick={this.inc}>
                  +
              </div>
              <div className="action-inc" onClick={this.dec}>
                  -
              </div>
            </div>
        </div>
      );
  }
}
