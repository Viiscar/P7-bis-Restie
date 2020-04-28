import React, { useState, useReducer, useEffect } from 'react';
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
  const [newRestLat, setNewRestLat] = useState();
  const [newRestLng, setNewRestLng] = useState();

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


  //Modal
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);

  const [openMod, setOpenMod] = useState(props.openModal);
  
  useEffect(() => {
    setOpenMod(props.openModal)

  }, [props.openModal]);

  function  openModal(mapProps, map, clickEvent){ 
    //console.log(mapProps);
    //console.log(map);
    setNewRestLat(clickEvent.latLng.lat());
    setNewRestLng(clickEvent.latLng.lng());

    if (openMod){
      setShow(true);
    }
  }
  return ( 
    <>
      <AppContext.Provider value={{ state, dispatch }}>
          <Map
            onClick={openModal}
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
          <AddRestaurant newRestLat={newRestLat} newRestLng={newRestLng} closeModal={closeModal} show={show} restaurants={restaurants}/>
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