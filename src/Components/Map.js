import React, { useState, useReducer, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import Panel from './Panel';
import {AppContext, initialState, reducer} from './Context';
//import nearbySearch from './nearbySearch';


export function MapContainer (props) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const [mapStyles, setMapStyles] = useState({width: '100%',height: '100%'});
  const [panelStyles, setPanelStyles] = useState({visibility: 'hidden'});
  const [restaurants] = useState(props.restaurants);
  const [nearbySearch, setNearbySearch] = useState(undefined);

  const changeInputValue = (newValue) => {

      dispatch({ type: 'UPDATE_INPUT', data: newValue,});
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchResult = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.4663,-66.1057&radius=500&type=restaurant&key=AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs')
        .then(response => response.json());

    setNearbySearch(fetchResult);
    
    //faire un context push     state.restaurant.push is not a function
    // fetchResult.results.map((rest, index) => 

    //   state.restaurant.push({
    //     restaurantName:rest.name,
    //     address:rest.vicinity,
    //     lat:rest.geometry.location.lat,
    //     long:rest.geometry.location.lng,
    //     ratings: ""
    //   })
    // )
    
    console.log("fetchResult",fetchResult);
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

  }

  //Adding Google Place Markers
  function searchMarker(){
    if (nearbySearch !== undefined){
        //console.ĺog("ok");
        nearbySearch.results.map((rest, index) => 
            <Marker
                onClick={onMarkerClick}
                title={rest.name}
                name={rest.name}
                index={rest.id}
                position={rest.geometry.location} 
            />
        )
    }else {
        console.log("failed");
    }
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

          {searchMarker()}

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