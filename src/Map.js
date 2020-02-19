import React, { Component, } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mapStyles: {width: '100%',height: '100%'},
      panelStyles: {},
      restaurantName: "",
      restaurantAddrs: "",
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(e) {
    this.setState({ 
      mapStyles : {width: '70%',height: '100%'},
      panelStyles: {
        position: 'absolute',
        right:'0px',
        height: '100%',
        width: '30%'},
      restaurantName: this.props.restaurants[e.index].restaurantName,
      restaurantAddrs: this.props.restaurants[e.index].address

    });
  }
  
  render(props) {
    return (
      <>
        <Map
          google={this.props.google}
          zoom={10}
          style={this.state.mapStyles}
          initialCenter={this.props.geoloc}
          disableDefaultUI= {true}

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
            <h3>{this.state.restaurantName}</h3>
            <h6>Adresse:</h6>
            <p>{this.state.restaurantAddrs}</p>

        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs'
})(MapContainer);