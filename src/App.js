import React from 'react';
import GoogleApiWrapper from './Map';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-light">
        <a className="navbar-brand">
            <img src="./Img/RESTIE_logo.png" alt="logo" style={{width:"200px"}} />
        </a>
        <ul>
            <li>
              Home
            </li>
            <li>
              Restaurants
            </li>
        </ul>
      </nav>
      <GoogleApiWrapper />
    </div>

  );
}

export default App;
