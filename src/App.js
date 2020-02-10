import React, { useState, useEffect } from 'react';
import GoogleApiWrapper from './Map';

function App() {

  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetchResult = await fetch('./restaurants.JSON')
        .then(response => response.json());

        setRestaurants(fetchResult)
    }
    fetchData();
  }, []);

  console.log(restaurants);

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
