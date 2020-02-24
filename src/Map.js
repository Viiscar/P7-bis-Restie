import React, { Component, useState, } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

export function MapContainer (props) {

  const [mapStyles, setMapStyles] = useState({width: '100%',height: '100%'});
  const [panelStyles, setPanelStyles] = useState({});
  const [restaurantName, setRestaurantName] = useState();
  const [restaurantAddrs, setRestaurantAddrs] = useState();
  const [restaurantAverage, setRestaurantAverage] = useState();

  function onMarkerClick(e) {

    setMapStyles({width: '70%',height: '100%'});
    setPanelStyles({
      position: 'absolute',
      right:'0px',
      height: '100%',
      width: '30%'});
    setRestaurantName(props.restaurants[e.index].restaurantName);
    setRestaurantAddrs(props.restaurants[e.index].address);
    setRestaurantAverage(props.restaurants[e.index].average);

  }

  console.log("selected stars " , props.selectedStars);
  console.log("restaurant " , props.restaurants);
  let restaurantDisplayed = null;

    
  if(props.selectedStars === "-" || props.selectedStars === undefined){
    restaurantDisplayed = props.restaurants;
  } else {
    console.log(" eeeee")
    restaurantDisplayed = props.restaurants.filter( rest => rest.average <= props.selectedStars);

  }

  return ( 
    <>
      <Map
        google={props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={props.geoloc}
        disableDefaultUI= {true}

      >
        {restaurantDisplayed.map((rest, index) => 
          <Marker
            onClick={onMarkerClick}
            title={rest.restaurantName}
            name={rest.restaurantName}
            index={index}
            position={{lat: rest.lat, lng: rest.long}} />
        )}
      </Map>
      <div style={panelStyles} >
          <h3>{restaurantName}</h3>
          <h6>Adresse:</h6>
          <p>{restaurantAddrs}</p>
          <h6>Average stars:</h6>
          <p>{restaurantAverage}</p>
          <h6>Comments:</h6>

      </div>
    </>
    
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs'
})(MapContainer);