import React, { Component, } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markerSelected : true,
      mapStyles: {}
      
    };

    if(this.markerSelected === true){
      this.setState({ 
        mapStyles : {width: '100%',height: '100%'},
      });
      
    } else {
      this.setState({ 
        mapStyles : {width: '50%',height: '100%'},
      });
      console.log(this.mapStyles);
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }
    onMarkerClick(props, marker, e) {
      //console.log(props);
      //console.log(marker);
      //console.log(e);
      
      this.setState({ 
        markerSelected : true,
      });
      console.log(this.mapStyles);
    }
  
  render(props) {
   
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={this.mapStyles}
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