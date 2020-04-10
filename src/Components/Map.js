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
  const [nearbySearch, setNearbySearch] = useState(undefined);

  const changeInputValue = (newValue) => {

      dispatch({ type: 'UPDATE_INPUT', data: newValue});
  };

  console.log(document.readyState)

  useEffect(() => {
    const fetchData = async () => {
      const fetchResult = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.4663,-66.1057&radius=500&type=restaurant&key=AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs')
        .then(response => response.json())
        .then(response => {
          setNearbySearch(response);
    
          //faire un context push     state.restaurant.push is not a function
      
          console.log("response", response);
      
          response.results.map((rest, index) => 
      
            restaurants.push({
              restaurantName:rest.name,
              address:rest.vicinity,
              lat:rest.geometry.location.lat,
              long:rest.geometry.location.lng,
              ratings: "",
              average: rest.rating,
              index: index + 6
            })
          )
          console.log("rest", restaurants);
        })

    // console.log("f",fetchResult.results[0].geometry.location);
    // console.log("f",fetchResult.results[0].name);
    // console.log("f",fetchResult.results[0].id);
    //console.log("f",fetchResult.results[0].rating)
    // console.log("f",fetchResult.results[0].vicinity)
    }
    fetchData();
  }, []);

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
  
    console.log(restaurants[e.index]);

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