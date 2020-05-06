import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import Panel from './Panel';
import AddRestaurant from './AddRestaurant';

export function MapContainer (props) {

  //State
  const [mapStyles, setMapStyles] = useState({width: '100%',height: '100%'});
  const [panelStyles, setPanelStyles] = useState({visibility: 'hidden'});
  const [restaurants] = useState(props.restaurants);
  const [geoloc] = useState(props.geoloc);
  const [nearbySearch, setNearbySearch] = useState(undefined);
  const [selectedRestaurant, setSelectedRestaurant] = useState(undefined);

  //Fetching Google Place
  function fetchPlaces(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    console.log(google, service);
    const userPosition = new google.maps.LatLng(geoloc.lat, geoloc.lng);
    const request = {
      location: userPosition,
      radius: '500',
      type: ['restaurant']
    };
    service.nearbySearch(request, (data) => {
      console.log(data);
      data.forEach((element, index) => {
        restaurants.push(
          {
            index: restaurants.length,
            restaurantName:element.name,
            address:element.vicinity,
            lat:element.geometry.location.lat(),
            long:element.geometry.location.lng(),
            ratings: [],
            average: element.rating
          })
      });
      setNearbySearch(restaurants);
    });
  }

  //When click on marker
  function onMarkerClick(index) {
    setMapStyles({width: '70%',height: '100%'});
    setPanelStyles({
      position: 'absolute',
      right:'0px',
      height: '100%',
      width: '30%',
      overflow: 'auto'
    });
    setSelectedRestaurant(restaurantDisplayed[index])
  }

  //Defines restaurant markers to be displayed on map
  let restaurantDisplayed = null;
  
  if(props.selectedStars === "-" || props.selectedStars === undefined){
    restaurantDisplayed = nearbySearch;
  } else {
    restaurantDisplayed = nearbySearch.filter( rest => {
      if(rest.average >= parseInt(props.selectedStars)){
        return rest
      }
    });
  }
  
  //Modal
  const [show, setShow] = useState(false);
  const [openMod, setOpenMod] = useState(props.openModal);

  const closeModal = () => setShow(false);

  //Click geolocation
  const [newRestLat, setNewRestLat] = useState();
  const [newRestLng, setNewRestLng] = useState();

  useEffect(() => {
    setOpenMod(props.openModal)
  }, [props.openModal]);

  function  openModal(mapProps, map, clickEvent){

    setNewRestLat(clickEvent.latLng.lat());
    setNewRestLng(clickEvent.latLng.lng());

    if (openMod){
      setShow(true);
    }
  }

  return (
    <>
      <Map
        onClick={openModal}
        google={props.google}
        onReady={fetchPlaces}
        zoom={11}
        style={mapStyles}
        initialCenter={geoloc}
        disableDefaultUI= {true}
      >

        {nearbySearch !== undefined ?
          restaurantDisplayed.map((rest, index) =>
            <Marker
              key={index}
              onClick={onMarkerClick.bind(this, index)}
              title={rest.restaurantName}
              name={rest.restaurantName}
              position={{lat: rest.lat, lng: rest.long}} />
          )
          : console.log("failed")}

      </Map>
      <AddRestaurant newRestLat={newRestLat} newRestLng={newRestLng} closeModal={closeModal} show={show} restaurants={restaurants}/>
      {selectedRestaurant !== undefined ?
      <Panel
        panelStyles={panelStyles}
        selectedRestaurant={selectedRestaurant}
        setSelectedRestaurant={setSelectedRestaurant}
      />
      : console.log("panel erreur")
      }
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs'
})(MapContainer);