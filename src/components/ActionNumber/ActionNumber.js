import React from 'react';
import './ActionNumber.css';

export default class ActionNumber extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      value : 0
    };
    
    this.render = this.render.bind(this);
    this.dec = this.dec.bind(this);
    this.inc = this.inc.bind(this);
  }

  inc() {
    this.setState({value: this.state.value + 1});
    this.props.updateValue(this.props.label, this.state.value);
  }

  dec() {
    this.setState({value: this.state.value - 1});
    this.props.updateValue(this.state.value);
  }

  render(){
      return(
        <div className="action-number">
            <div className="left">
                <input type="number" className="action-number-input" value={this.state.value} onChange={this.props.updateValue}></input>
                <div className="action-number-label">{ this.props.label }</div>
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
