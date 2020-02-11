import React, { Component, } from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  
  render(props) {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={this.props.geoloc}
      >
        {this.props.restaurants.map(rest => 
          <Marker
          title={rest.restaurantName}
          name={'SOMA'}
          position={{lat: rest.lat, lng: rest.long}} />
        )}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs'
})(MapContainer);