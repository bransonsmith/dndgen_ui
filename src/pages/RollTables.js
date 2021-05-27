import React from 'react';
import axios from "axios";
import Loading from '../components/Loading/Loading';
import ActionNumber from '../components/ActionNumber/ActionNumber';
import ActionSelect from '../components/ActionSelect/ActionSelect';

export default class RollTables extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      data : null,
      location_types: [],
      actionsAreCollapsed: false
    };

    this.toggleActionsExpansion = this.toggleActionsExpansion.bind(this);
  }

  componentDidMount() {
      this.renderMyData();
  }

  renderMyData(){
    axios
      .get("/api/roll_tables/")
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  }

  toggleActionsExpansion() {
    let currentValue = this.state['actionsAreCollapsed'];
    this.setState ({
      actionsAreCollapsed: !currentValue 
    });
  }

  render(){
      return(
          <div className="page">
            { this.state.data 
              ? <div>Select Roll Table
                  <select>
                    {this.state.data.map((value, index) => {
                      return <option key={index}> { value.name } </option>
                    })}
                  </select>
                </div>
              : <Loading/> }

          { this.state.actionsAreCollapsed
          ? <div className="collapsed-page-actions" onClick={this.toggleActionsExpansion}>
              <div className="collapsed-actions-label">Add Entry</div>
              <div className="pointer"></div>
            </div>
          : <div className="page-actions">  
              <div className="expanded-page-actions-bar" onClick={this.toggleActionsExpansion}>
                <div className="collapsed-actions-label">Add Entry</div>
                <div className="pointer-down"></div>
              </div>
              <form className="action-form">
                <div className="actions">
                  <ActionNumber className="action"></ActionNumber>
                  <ActionSelect className="action"></ActionSelect>
                </div>
                <button className="action-button">Add new entry</button>
              </form>
            </div> }
        </div>
      );
  }
}
