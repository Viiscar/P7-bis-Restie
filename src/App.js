import React, { useState, useEffect } from 'react';
import GoogleApiWrapper from './Map';

function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [geoloc, setGeoloc] = useState({lat: 18.4625, lng:-66.1099});
  const [averageStars, setAverageStars] = useState([]);
  const [selectedStars, setSelectedStars] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetchResult = await fetch('./restaurants.JSON')
        .then(response => response.json());

      fetchResult.map(rest => {
        const length = rest.ratings.length;
        const stars = rest.ratings.map(rating =>{
          return rating.stars
        });

        const totalStars = stars.reduce((total,star) =>{
          return total += star
        })
        const average =  totalStars/length;
        setAverageStars(averageStars => averageStars.concat(average));
      } )

        setRestaurants(fetchResult)
    }
    fetchData();
    // if (navigator.geolocation) {
    //   const getCurrentLocation = async () => {
    //     navigator.geolocation.getCurrentPosition (position => 
    //       setGeoloc({
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //         })
    //     )
    //   }
    //   getCurrentLocation();      
    // }
  }, []);

  function handleClick(e){
    setSelectedStars(e.target.value)
  }

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
      <div>
        Afficher les restaurants comportant {" "}   
        <select name="my_html_select_box"  onClick={handleClick} >
          <option value="1">1 etoiles</option>
          <option value="2">2 etoiles</option>
          <option value="3">3 etoiles</option>
          <option value="4">4 etoiles</option>
          <option value="5">5 etoiles</option>
        </select>
      </div>
      <div className="map-container">
        <GoogleApiWrapper geoloc={geoloc} restaurants={restaurants} average={averageStars} selectedStars={selectedStars}/>
      </div>
    </div>
  );
}

export default App;