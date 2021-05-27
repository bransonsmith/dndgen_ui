import React from 'react';
import './ActionNumber.css';

export default class ActionNumber extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      value : 0,
      label: 'Roll Range'
    };
  }

  render(){
      return(
        <div className="action-number">
            <div className="left">
                <input type="number" className="action-number-input" defaultValue={this.state.value}></input>
                <div className="action-number-label">{ this.state.label }</div>
            </div>
            <div className="right">
                    <button className="action-inc">
                        +
                    </button>
                    <button className="action-inc">
                        -
                    </button>
                </div>
        </div>
      );
  }
}
