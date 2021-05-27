import React from 'react';
import './Nav.css';

export default class Nav extends React.Component  {
    
  render(){
    return(
      <nav>
        <ul className="links">
          <li className="link"><div className="link-text">Roll Tables</div></li>
          <li className="link"><div className="link-text">Treasure Hoards</div></li>
          <li className="link"><div className="link-text">Encounters</div></li>
          <li className="link"><div className="link-text">Characters</div></li>
          <li className="link"><div className="link-text">Monsters</div></li>
          <li className="link"><div className="link-text">History</div></li>
          <li className="link"><div className="link-text">Regions</div></li>
          <li className="link"><div className="link-text">Locations</div></li>
        </ul>
      </nav>
    );
  }
}
