import React from 'react';
import './ActionSelect.css';

export default class ActionSelect extends React.Component  {
    
  constructor(props) {
    super(props);
    this.state = {
      value: 'Select a ' + this.props.label
    };

    this.selectionMade = this.selectionMade.bind(this);
  }

  selectionMade(event) {
    this.setState({value: event.target.value})
    this.props.onSelection(this.props.label, event.target.value);
  }

  render(){
    return(
      <div className="action-select">
        <label>{this.props.label}</label>
        <select value={this.state.value} className="select-component" onChange={this.selectionMade} placeholder="Select a Roll Table">
          <option value='Select a Roll Table' disabled>Select a Roll Table</option>
          {this.props.values.map((value, index) => {
            return <option key={index}>{value.name}</option>
          })}
        </select>
      </div>
    );
  }
}
