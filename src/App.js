import React, { useState, useEffect } from 'react';
import GoogleApiWrapper from './Components/Map';

function App() {
  
  //state
  const [restaurants, setRestaurants] = useState([]);
  const [geoloc, setGeoloc] = useState({lat: 18.4625, lng:-66.1099});
  const [selectedStars, setSelectedStars] = useState();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {

    //Getting restaurant list from JSON
    const fetchData = async () => {
      const fetchResult = await fetch('./restaurants.JSON')
        .then(response => response.json());

      // calculating average stars per restaurant
      fetchResult.map(rest => {
        const length = rest.ratings.length;
        const stars = rest.ratings.map(rating => rating.stars);
        const totalStars = stars.reduce((total,star) => total += star)
        rest.average =  totalStars/length;

      } )
      setRestaurants(fetchResult)
    }
    fetchData();

    //Getting geolocation
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("location failed")
      }
    }

    function showPosition(position) {
      setGeoloc({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    }
    getLocation()
  }, []);
 
  //Selecting stars in filter
  function handleClick(e){
    setSelectedStars(e.target.value)
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-light">
        <img className="navbar-brand" src="./Img/RESTIE_logo.png" alt="logo" style={{width:"200px"}} />
        <ul>
            <li>
            <div>
              Afficher les restaurants comportant {" "}
              <select className="btn btn-light" name="my_html_select_box"  onClick={handleClick} >
                <option value="-">-</option>
                <option value="1">1 etoiles</option>
                <option value="2">2 etoiles</option>
                <option value="3">3 etoiles</option>
                <option value="4">4 etoiles</option>
                <option value="5">5 etoiles</option>
              </select>
            </div>
            </li>
            <li>
              <button className="btn btn-light" onClick={() => setOpenModal(!openModal)}>Ajouter un restaurant</button> {openModal === true ?"puis cliquez sur la carte a l'emplacement du restaurant." : ""} 
            </li>
        </ul>
      </nav>
      <div className="navLine"></div>
      <div className="map-container">
        <GoogleApiWrapper geoloc={geoloc} restaurants={restaurants} selectedStars={selectedStars} openModal={openModal}/>
      </div>
    </div>
  );
}

export default App;
