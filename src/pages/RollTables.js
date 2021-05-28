import React from 'react';
import axios from "axios";
import Loading from '../components/Loading/Loading';
import ActionNumber from '../components/ActionNumber/ActionNumber';
import ActionSelect from '../components/ActionSelect/ActionSelect';

export default class RollTables extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      rollTables : null,
      location_types: [],
      actionsAreCollapsed: false,
      selections: {},
      values: {},
      entryOptions: [ {'name': 'apple'}, {'name': 'banana'}, {'name': 'cranberry'}]
    };

    this.toggleActionsExpansion = this.toggleActionsExpansion.bind(this);
    this.selectionMade = this.selectionMade.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.render = this.render.bind(this);
  }

  componentDidMount() {
      this.renderMyData();
  }

  renderMyData(){
    axios
      .get("/api/roll_tables/")
      .then((res) => this.setState({ rollTables: res.data }))
      .catch((err) => console.log(err));
  }

  toggleActionsExpansion() {
    let currentValue = this.state['actionsAreCollapsed'];
    this.setState ({
      actionsAreCollapsed: !currentValue 
    });
  }

  selectionMade(selectLabel, valueSelected) {
    let updatedSelections = this.state.selections;
    updatedSelections[selectLabel] = valueSelected;

    // if (selectLabel === "Roll Table") {
    //   this.setState({entryOptions: null});
    //   axios
    //   .get("/api/roll_tables/" + valueSelected)
    //   .then((res) => this.setState({ entryOptions: res.data }))
    //   .catch((err) => console.log(err));
    // }

    this.setState({
      selections: updatedSelections
    });
  }

  updateValue(valueLabel, value) {
    let updatedValues = this.state.values;
    updatedValues[valueLabel] = value;
    this.setState({
      values: updatedValues
    });
  }

  render(){
      return(
        <span>  
          { this.state.rollTables 
            ? <div className="page">
              { this.state.actionsAreCollapsed
              ? <div className="collapsed-page-actions" onClick={this.toggleActionsExpansion}>
                  <div className="collapsed-actions-label">Actions</div>
                  <div className="pointer"></div>
                </div>
              
              : <div className="page-actions">      
                  <div className="expanded-page-actions-bar" onClick={this.toggleActionsExpansion}>
                    <div className="collapsed-actions-label">Actions</div>
                    <div className="pointer-down"></div>
                  </div>

                  <form className="action-form">
                    <div className="super-action">
                      <ActionSelect
                        label={"Roll Table"}
                        values={this.state.rollTables}
                        onSelection={this.selectionMade}
                      />
                    </div>

                    { "Roll Table" in this.state.selections && this.state.entryOptions
                    ? <div className="sub-actions">
                        <div className="actions">
                          <div className="action"><ActionNumber
                            label="Roll Range"
                            updateValue={this.updateValue}
                          /></div>
                          <div className="action"><ActionSelect
                            label={this.state.selections["Roll Table"]}
                            values={this.state.entryOptions}
                            onSelection={this.selectionMade}
                          /></div>
                        </div>
                        <button className="action-button">Add new entry</button>
                      </div>
                    : <div></div> }


                  </form>
                </div> }
            </div>
        
          : <div className="page"><Loading/></div> }

          </span>
      );
  }
}
