import React from 'react';
import axios from "axios";
import Loading from '../../components/Loading/Loading';
import ActionNumber from '../../components/ActionNumber/ActionNumber';
import ActionSelect from '../../components/ActionSelect/ActionSelect';
import './RollTablePage.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageActions from '../../components/PageActions/PageActions';

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
      entries: [ 
        { 'quantity': 5, 'name': 'Wizard Tower' }, 
        { 'quantity': 3, 'name': 'Enchanted Rune' }, 
        { 'quantity': 2, 'name': 'Witch Coven' }, 
        { 'quantity': 1, 'name': 'Magic Portal' }, 
        { 'quantity': 3, 'name': 'Enchanted Rune' }, 
        // { 'quantity': 2, 'name': 'Witch Coven' }, 
        // { 'quantity': 1, 'name': 'Magic Portal' },, 
        // { 'quantity': 3, 'name': 'Enchanted Rune' }, 
        // { 'quantity': 2, 'name': 'Witch Coven' }, 
        // { 'quantity': 1, 'name': 'Magic Portal' },, 
        // { 'quantity': 3, 'name': 'Enchanted Rune' }, 
        // { 'quantity': 2, 'name': 'Witch Coven' }, 
        // { 'quantity': 1, 'name': 'Magic Portal' },,,, 
        // { 'quantity': 3, 'name': 'Enchanted Rune' }, 
        // { 'quantity': 2, 'name': 'Witch Coven' }, 
        // { 'quantity': 1, 'name': 'Magic Portal' },, 
        // { 'quantity': 3, 'name': 'Enchanted Rune' }, 
        // { 'quantity': 2, 'name': 'Witch Coven' }, 
        // { 'quantity': 1, 'name': 'Magic Portal' },
      ]
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


// Page Title Section (static)
// Page Content Section (scroll)
  // Roll Table Component
// Page Actions Section (expandable, scroll)


  render(){
      return(
        <div className="roll-table-page">
            <PageHeader title='Roll Tables' subtitle={ this.state.selections['Roll Table'] }/>

            {/* <PageContent> */}
                { this.state.rollTables
                ? <span>
                    <div className="page-content-section">
                        { this.state.selections['Roll Table']
                        ? <div className="roll-table"> Roll Table Goes Here </div>
                        : <div className="prompt"> Select a roll table. </div> 
                        }
                    </div>

                </span>
                : <Loading/>
                }
            {/* </PageContent> */}

            
            <PageActions>
                
            </PageActions>

        </div>
      );
  }
}
