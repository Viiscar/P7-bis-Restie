import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import Panel from './Panel';

export function MapContainer (props) {

  const [mapStyles, setMapStyles] = useState({width: '100%',height: '100%'});
  const [panelStyles, setPanelStyles] = useState({visibility: 'hidden'});
  const [restaurants] = useState(props.restaurants);
  const [restaurantSelected, setRestaurantSelected] = useState({});


  function onMarkerClick(e) {
    setMapStyles({width: '70%',height: '100%'});
    setPanelStyles({
      position: 'absolute',
      right:'0px',
      height: '100%',
      width: '30%'});
      
    setRestaurantSelected(restaurants[e.index]);

    console.log("props Map.js", restaurants[e.index]);// affiche ce qui est selectionné actuellement 
    console.log("set Map.js", restaurantSelected); // affiche ce qui a été sélectionné antérieurement
  }
  

  let restaurantDisplayed = null;
    
  if(props.selectedStars === "-" || props.selectedStars === undefined){
    restaurantDisplayed = props.restaurants;
  } else {
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
      <Panel 
        panelStyles={panelStyles} 
        restaurantName={restaurantSelected.restaurantName} 
        restaurantAddrs= {restaurantSelected.address} 
        restaurantAverage={restaurantSelected.average}
        restaurantSelected={restaurantSelected}
      />
    </>
    
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs'
})(MapContainer);