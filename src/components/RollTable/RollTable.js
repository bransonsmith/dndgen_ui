import React from 'react';
import './RollTable.css';

export default class RollTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      totalQuantity: this.getTotalQuantity(),
      rangedEntries: this.getRangedEntries()
    };

    this.render = this.render.bind(this);
  }

  getTotalQuantity() {
    let sum = 0;
    for (let i = 0; i < this.props.entries.length; i++) {
      const entry = this.props.entries[i];
      sum += entry['roll_quantity'];
    }
    return sum;
  }

  getRangedEntries() {
    let rangedEntries = [];
    let index = 1;
    for (let i = 0; i < this.props.entries.length; i++) {
      const entry = this.props.entries[i];
      let rangedEntry = { "min": index, "max": index + entry['roll_quantity'] - 1, "name": entry['name'] };
      rangedEntries.push(rangedEntry);
      index += entry['roll_quantity'];
    }
    return rangedEntries;
  }

  render() {
    return (
      <div className="roll-table">
        <div className="header-row fixed">
          <div className="roll-col"><div className="header-row-text">1d{this.state.totalQuantity}</div></div>
          <div className="name-col"><div className="header-row-text">{this.props.name}</div></div>
        </div>
        <div className="table-content scroll">
          {this.state.rangedEntries.map((entry, index) => {
            return <div className="table-row" key={index}>
              <div className="roll-col"><div className="table-row-text">{entry.min} - {entry.max} </div></div>
              <div className="name-col"><div className="table-row-text">{entry.name}</div></div>
            </div>
          })}
        </div>
      </div>
    );
  }
}
