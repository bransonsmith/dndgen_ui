import React from 'react';
import axios from "axios";
import Loading from '../../components/Loading/Loading';
import ActionNumber from '../../components/ActionNumber/ActionNumber';
import ActionSelect from '../../components/ActionSelect/ActionSelect';
import './RollTablePage.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageActions from '../../components/PageActions/PageActions';
import ActionSubmit from '../../components/ActionSubmit/ActionSubmit';
import RollTable from '../../components/RollTable/RollTable';
import PageContent from '../../components/PageContent/PageContent';

export default class RollTables extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      rollTables : null,
      location_types: [],
      actionsAreCollapsed: false,
      selections: {},
      values: {},
      entryOptions: [ {'name': 'apple'}, {'name': 'banana'}, {'name': 'cranberry'}],
      entries: null,
      loadingError: null,
      minTimeToLoadHasPassed: false
    };

    this.toggleActionsExpansion = this.toggleActionsExpansion.bind(this);
    this.selectionMade = this.selectionMade.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.render = this.render.bind(this);
    this.submitNewEntry = this.submitNewEntry.bind(this);
    this.timeFunc = this.timeFunc.bind(this);
    this.getNamedEntries = this.getNamedEntries.bind(this);
  }

  componentDidMount() {
      this.renderMyData();
      this.waitMinTime();
  }

  waitMinTime() {
    setTimeout(this.timeFunc, 2000);
  }
  timeFunc() {
    this.setState({ minTimeToLoadHasPassed: true });
  }

  renderMyData(){
    axios
      .get("/worldgen/RollTables/")
      .then((res) => this.setState({ rollTables: res.data }))
      .catch((err) => this.setState({ loadingError: err }));
  }

  toggleActionsExpansion() {
    let currentValue = this.state['actionsAreCollapsed'];
    this.setState ({
      actionsAreCollapsed: !currentValue 
    });
  }

  selectionMade(selectLabel, valueSelected) {
    this.setState({ entries: null });
    this.setState({ entryOptions: null });
    let updatedSelections = this.state.selections;
    updatedSelections[selectLabel] = valueSelected;

    var rollTableId = this.state.rollTables.find(x => x['name'] === updatedSelections['Roll Table'])['id'];

    axios
      .get("/worldgen/RollTableEntrys")
      .then((res) => this.setState({ entries: res.data.filter(x => x['roll_table'] === rollTableId) }))
      .catch((err) => this.setState({ loadingError: err }));

    axios
      .get("/worldgen/LocationTypes")
      .then((res) => this.setState({ entryOptions: res.data }))
      .catch((err) => this.setState({ loadingError: err }));

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

  getNamedEntries() {
    let namedEntries = [];
    for (let i = 0; i < this.state.entries.length; i++) {
      const entry = this.state.entries[i];
      let namedEntry = {
        id: entry['id'],
        name: this.state.entryOptions.find(x => x['id'] === entry['location_type'])['name'],
        roll_quantity: entry['roll_quantity'],
        order: entry['order']
      };
      namedEntries.push(namedEntry);
    }
    namedEntries.sort( (a, b) => a['order'] - b['order']);
    return namedEntries;
  }

  submitNewEntry() {
    console.log('New Entry Submitted.');
    console.log(this.state.values['Roll Range']);
  }

  render(){
      return(
        <div className="roll-table-page">
          <PageHeader title='Roll Tables' subtitle={ this.state.selections['Roll Table'] }/>            
            
          { this.state.rollTables
          ? <div>
            <PageContent>
              <div className="page-content-section">
                { this.state.selections['Roll Table'] && this.state.entries && this.state.entryOptions
                ? <RollTable name={ this.state.selections['Roll Table'] } entries={ this.getNamedEntries() }></RollTable>
                : <div className="prompt"> Select a roll table below. </div> 
                }
              </div>
            </PageContent>
            <PageActions>
              <ActionSelect
                label={"Roll Table"}
                values={this.state.rollTables}
                onSelection={this.selectionMade}
              />
              { this.state.selections['Roll Table'] && this.state.entries && this.state.entryOptions
              ? <div>
                  <ActionNumber
                    label="Roll Range"
                    updateValue={this.updateValue}
                  />
                  <ActionSelect
                    label='New Entry'
                    values={this.state.entryOptions}
                    onSelection={this.selectionMade}
                  />
                  <ActionSubmit
                    label={'Add New Entry'}
                    submitValue={this.submitNewEntry}
                  />
                </div>
              : <div></div>
              }
            </PageActions>
          </div>
          : <div className="loading-div">
            { this.state.loadingError && this.state.minTimeToLoadHasPassed
            ? <div className="loading-error">Sorry! Something isn't working, and the app failed to load the roll tables. Please try again later.</div>
            : <Loading/>  
            }</div>
          }
        </div>
      );
  }
}
