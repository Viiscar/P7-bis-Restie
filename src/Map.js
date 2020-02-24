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
      restaurantAddrs: this.props.restaurants[e.index].address,
      restaurantAverage: this.props.restaurants[e.index].average
    });
  }
  
  render(props) {

    console.log("selected stars " , this.props.selectedStars);
    console.log("restaurant " , this.props.restaurants);
    let restaurantDisplayed = null;

    
    if(this.props.selectedStars === "-" || this.props.selectedStars === undefined){
      restaurantDisplayed = this.props.restaurants;
    } else{
      console.log(" eeeee")
      restaurantDisplayed = 
        this.props.restaurants.filter( rest => rest.average <= this.props.selectedStars);

    }
  
    return (
      <>
        <Map
          google={this.props.google}
          zoom={10}
          style={this.state.mapStyles}
          initialCenter={this.props.geoloc}
          disableDefaultUI= {true}

        >
          {restaurantDisplayed.map((rest, index) => 
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
            <h6>Average stars:</h6>
            <p>{this.state.restaurantAverage}</p>
            <h6>Comments:</h6>

        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs'
})(MapContainer);