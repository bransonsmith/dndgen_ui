import React from 'react';
import ActionNumber from '../../components/ActionNumber/ActionNumber';
import ActionSelect from '../../components/ActionSelect/ActionSelect';
import './PageActions.css';

export default class PageActions extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      actionsAreCollapsed: true,
    };

    this.toggleActionsExpansion = this.toggleActionsExpansion.bind(this);
    // this.selectionMade = this.selectionMade.bind(this);
    // this.updateValue = this.updateValue.bind(this);
    this.render = this.render.bind(this);
  }


toggleActionsExpansion() {}

render() {
    return(
        <div className="page-actions-container">
            { this.state.actionsAreCollapsed
            ? <div className="collapsed-page-actions" onClick={this.toggleActionsExpansion}>
                <div className="collapsed-actions-label">Actions</div>
                <div className="pointer"></div>
              </div>  
            : <div className="page-actions">
                Expanded
              </div> 
            }
        </div>
    );
}

          
        // : <div className="page-actions">      
        //       <div className="expanded-page-actions-bar" onClick={this.toggleActionsExpansion}>
        //         <div className="collapsed-actions-label">Actions</div>
        //         <div className="pointer-down"></div>
        //       </div>

        //       <form className="action-form">
        //         <div className="super-action">
        //           <ActionSelect
        //             label={"Roll Table"}
        //             values={this.state.rollTables}
        //             onSelection={this.selectionMade}
        //           />
        //         </div>

        //         { "Roll Table" in this.state.selections && this.state.entryOptions
        //         ? <div className="sub-actions">
        //             <div className="actions">
        //               <div className="action"><ActionNumber
        //                 label="Roll Range"
        //                 updateValue={this.updateValue}
        //               /></div>
        //               <div className="action"><ActionSelect
        //                 label={this.state.selections["Roll Table"]}
        //                 values={this.state.entryOptions}
        //                 onSelection={this.selectionMade}
        //               /></div>
        //             </div>
        //             <button className="action-button">Add new entry</button>
        //           </div>
        //         : <div></div> }


        //       </form>
        //     </div> 
        // });
}