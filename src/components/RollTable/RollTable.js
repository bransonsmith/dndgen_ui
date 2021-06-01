import React from 'react';
import './RollTable.css';

export default class RollTable extends React.Component  {

  render(){
      return(
        <main className="roll-table">
          <div className="wrapper">
            <table cellSpacing="0" cellPadding="0">
              <thead><tr>
                <th>1d{'X'}</th>
                <th> { this.props.name } </th>
              </tr></thead>
              <tbody>
              {this.props.entries.map((entry, index) => {
                return <tr key={index}>
                  <td>{entry.quantity}</td>
                  <td>{ entry.name }</td>
                </tr>
              })}
              </tbody>
            </table>
          </div>
        </main>
      );
  }
}
