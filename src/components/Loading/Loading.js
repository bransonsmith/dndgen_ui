import React from 'react';
import './Loading.css'

export default class Loading extends React.Component  {

  render(){
      return(
        <div className="loading">
          <svg className="loading-spinner" viewBox="0 0 100 100">
            <circle className="circlepath" cx="50" cy="50" r="40"></circle>
            <circle className="atom1" cx="50" cy="10" r="3"></circle>
          </svg>
          <div className="loading-label">Loading...</div>
        </div>
      );
  }
}
