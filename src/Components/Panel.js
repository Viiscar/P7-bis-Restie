import React from 'react';
import CommentForm from './Comments/CommentForm';

function Panel(props){

    const selectedRestaurant = props.selectedRestaurant

    //StreetView
    const lat =  selectedRestaurant.lat;
    const long = selectedRestaurant.long;
    const streetView = "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=" + lat + "," + long + "9&fov=80&heading=70&pitch=0&key=AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs"

    return(
        <div style={props.panelStyles} >
            <h3>{selectedRestaurant.restaurantName}</h3>
            <img alt={selectedRestaurant.restaurantName} src={streetView}/>
            <h6>Adresse:</h6>
            <p>{selectedRestaurant.address}</p>
            <h6>Average stars:</h6>
            <p>{selectedRestaurant.average === undefined ? "Unavailable" : selectedRestaurant.average}</p>
            <h6>Comments:</h6>
            <CommentForm
            setSelectedRestaurant={props.setSelectedRestaurant}
            selectedRestaurant={selectedRestaurant}
             />
        </div>
    )
}

export default Panel;