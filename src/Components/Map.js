import React, { useState, useReducer } from 'react';
import Marker from "react-google-maps";
import Map from "./Place";
import Panel from './Panel';
import {AppContext, initialState, reducer} from './Context';


function MapContainer(props){

  const [state, dispatch] = useReducer(reducer, initialState);

  const [mapStyles, setMapStyles] = useState({width: '100%',height: '100%'});
  const [panelStyles, setPanelStyles] = useState({visibility: 'hidden'});
  const [restaurants] = useState(props.restaurants);

  const changeInputValue = (newValue) => {

    dispatch({ type: 'UPDATE_INPUT', data: newValue,});
  };

  //when click on marker
  function onMarkerClick(e) {
    setMapStyles({width: '70%',height: '100%'});
    setPanelStyles({
      position: 'absolute',
      right:'0px',
      height: '100%',
      width: '30%'});
      
    //setRestaurantSelected(restaurants[e.index]);
    changeInputValue(restaurants[e.index]);

  }
  
  //Defines restaurants to be displayed on map
  let restaurantDisplayed = null;
    
  if(props.selectedStars === "-" || props.selectedStars === undefined){
    restaurantDisplayed = props.restaurants;
  } else {
    restaurantDisplayed = props.restaurants.filter( rest => rest.average <= props.selectedStars);
  }

  return ( 
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs&libraries=places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          center={props.geoloc}
          zoom={10}
          disableDefaultUI= {true}
          style={mapStyles}
        >
        
          {restaurantDisplayed.map((rest, index) => 
            <Marker 
              key={index} 
              position={{lat: rest.lat, lng: rest.long}}
              onClick={onMarkerClick}
              title={rest.restaurantName}
              name={rest.restaurantName}
            />
          )}
        </Map>
        <Panel 
          panelStyles={panelStyles}
        />
      </AppContext.Provider>
    </>
    
  );
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs'
// })(MapContainer);

export default MapContainer;