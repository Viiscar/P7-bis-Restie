import React, { Component, } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mapStyles: {width: '100%',height: '100%'} 
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick() {
    this.setState({ 
      mapStyles : {width: '70%',height: '100%'},
    });  
  }
  
  render(props) {
   
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={this.state.mapStyles}
        initialCenter={this.props.geoloc}
      >
        {this.props.restaurants.map(rest => 
          <Marker
            onClick={this.onMarkerClick}
            title={rest.restaurantName}
            name={rest.restaurantName}
            position={{lat: rest.lat, lng: rest.long}} />
        )}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs'
})(MapContainer);