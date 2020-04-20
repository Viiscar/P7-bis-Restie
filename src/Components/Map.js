import React, { useState, useReducer, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import Panel from './Panel';
import {AppContext, initialState, reducer} from './Context';
//import NearbySearch from './nearbySearch';

export function MapContainer (props) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const [mapStyles, setMapStyles] = useState({width: '100%',height: '100%'});
  const [panelStyles, setPanelStyles] = useState({visibility: 'hidden'});
  const [restaurants] = useState(props.restaurants);
  const [geoloc] = useState(props.geoloc);
  const [nearbySearch, setNearbySearch] = useState(undefined);

  const changeInputValue = (newValue) => {

    dispatch({ type: 'UPDATE_INPUT', data: newValue,});
    return true
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchResult = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+geoloc.lat+','+geoloc.lng+'&radius=500&type=restaurant&key=AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs')
        .then(response => response.json())
        .then(response => {
          setNearbySearch(response);
          // il faut cliquer d'abord sur un marker json pour ne pas avoir l'erreur
      
          response.results.map((rest, index) => 
      
            restaurants.push({
              restaurantName:rest.name,
              address:rest.vicinity,
              lat:rest.geometry.location.lat,
              long:rest.geometry.location.lng,
              ratings: [],
              average: rest.rating,
              index: index + 6
            })
          )
          console.log("rest", restaurants);
        })

    }
    fetchData();
  }, []);

  //when click on marker
  async function onMarkerClick(e) {
    // if state.restaurant is undefined
    
    setMapStyles({width: '70%',height: '100%'});
    setPanelStyles({
      position: 'absolute',
      right:'0px',
      height: '100%',
      width: '30%'
    });
      
    const change = await changeInputValue(restaurants[e.index]);
  
    console.log(change);

  }

  console.log("nearby", nearbySearch);
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
          google={props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={geoloc}
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
          {/* Adding Google Place Markers */}
          {nearbySearch !== undefined ?
            nearbySearch.results.map((rest, index) =>
              <Marker
                onClick={onMarkerClick}
                title={rest.name}
                name={rest.name}
                index={rest.id}
                position={rest.geometry.location}
              />
            )
            : console.log("failed")}

          {/* <NearbySearch/> */}

        </Map>
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