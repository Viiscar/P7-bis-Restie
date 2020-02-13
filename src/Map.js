import React, { Component, } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mapStyles: {width: '100%',height: '100%'},
      panelStyles: {},
      restaurantDetails: ""
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(e) {
    this.setState({ 
      mapStyles : {width: '70%',height: '100%'},
      panelStyles: {
        backgroundColor: 'blue',
        position: 'absolute',
        right:'0px',
        height: '100%',
        width: '30%'},
      restaurantDetails: "<p>"+ this.props.restaurants[e.index].restaurantName +"</p>"
    });
    console.log(this.state.restaurantDetails)
    console.log(this.state.panelStyles)
  }
  
  render(props) {
    return (
      <>
        <Map
          google={this.props.google}
          zoom={10}
          style={this.state.mapStyles}
          initialCenter={this.props.geoloc}
        >
          {this.props.restaurants.map((rest, index) => 
            <Marker
              onClick={this.onMarkerClick}
              title={rest.restaurantName}
              name={rest.restaurantName}
              index={index}
              position={{lat: rest.lat, lng: rest.long}} />
          )}
        </Map>
        <div style={this.state.panelStyles} >
            {this.state.restaurantDetails}
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs'
})(MapContainer);