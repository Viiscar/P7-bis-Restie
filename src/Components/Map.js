import React, { useState, useReducer } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import Panel from './Panel';
import AddRestaurant from './AddRestaurant';
import {AppContext, initialState, reducer} from './Context';


export function MapContainer (props) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const [mapStyles, setMapStyles] = useState({width: '100%',height: '100%'});
  const [panelStyles, setPanelStyles] = useState({visibility: 'hidden'});
  const [restaurants] = useState(props.restaurants);

  //Click geolocation
  const [newRestLat, setNewRestLat] = useState("lat");
  const [newRestLng, setNewRestLng] = useState("lng");

  //Getting click geoloc on map
  function handleClick(mapProps, map, event) {

    setNewRestLat(event.latLng.lat());
    setNewRestLng(event.latLng.lng());

  }

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
        <div data-toggle="modal" data-target="#myModal">
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
          <AddRestaurant newRestLat={newRestLat} newRestLng={newRestLng} />
        </div>
        <Panel 
          panelStyles={panelStyles}
        />
      </AppContext.Provider>
    </>
    
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs'
})(MapContainer);