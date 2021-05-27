import React from 'react';
import './Nav.css';

export default class Nav extends React.Component  {
    
  render(){
    return(
      <nav>
        <ul className="links">
          <li>Roll Tables</li>
          <li>Treasure Hoards</li>
          <li>Encounters</li>
          <li>Characters</li>
          <li>Monsters</li>
          <li>History</li>
          <li>Regions</li>
          <li>Locations</li>
        </ul>
      </nav>
    );
  }
}
