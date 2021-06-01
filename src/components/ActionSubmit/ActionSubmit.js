import React from 'react';
import './ActionSubmit.css';

export default class ActionSubmit extends React.Component  {

  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.submitValue();
  }

  render(){
      return(
        <div className="action-submit">
          <button className="action-submit-button" onClick={this.submit}>{ this.props.label }</button>
        </div>
      );
  }
}
