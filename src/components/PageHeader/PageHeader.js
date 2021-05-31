import React from 'react';
import './PageHeader.css';

export default class PageHeader extends React.Component  {

  render(){
      return(
        <div className="page-header">
            <div className="page-title">{ this.props.title }</div>
            { this.props.subtitle 
              ? <div className="page-subtitle">{ this.props.subtitle }</div>
              : <span></span>
            }
        </div>
      );
  }
}
