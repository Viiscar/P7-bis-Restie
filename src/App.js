import React, { useState, useEffect } from 'react';
import GoogleApiWrapper from './Map';

function App() {

  const [restaurants, setRestaurants] = useState();
  const [geoloc, setGeoloc] = useState({lat: 18.4625, lng:-66.1099});

  useEffect(() => {
    const fetchData = async () => {
      const fetchResult = await fetch('./restaurants.JSON')
        .then(response => response.json());

        setRestaurants(fetchResult)
    }
    fetchData();
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => setGeoloc({
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //       })
    //   )
    //   console.log(geoloc);
    // }
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-light">
        <img className="navbar-brand" src="./Img/RESTIE_logo.png" alt="logo" style={{width:"200px"}} />
        <ul>
            <li>
              Home
            </li>
            <li>
              Restaurants
            </li>
        </ul>
      </nav>
      <GoogleApiWrapper geoloc={geoloc} restaurants={restaurants}/>
    </div>

  );
}

export default App;
