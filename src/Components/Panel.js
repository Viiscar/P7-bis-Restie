import React, { useContext } from 'react';
import CommentForm from './Comments/CommentForm';
import { AppContext } from './Context';

function Panel(props){

    //Context
    const {state} = useContext(AppContext);

    //StreetView
    const lat =  state.restaurant.lat;  //TypeError: Cannot read property 'lat' of undefined
    const long = state.restaurant.long;
    const streetView = "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=" + lat + "," + long + "9&fov=80&heading=70&pitch=0&key=AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs"

    return(
        <div style={props.panelStyles} >
            <h3>{state.restaurant.restaurantName}</h3>
            <img alt={state.restaurant.restaurantName} src={streetView}/>
            <h6>Adresse:</h6>
            <p>{state.restaurant.address}</p>
            <h6>Average stars:</h6>
            <p>{state.restaurant.average === undefined ? "Unavaible" : state.restaurant.average}</p>
            <h6>Comments:</h6>
            <CommentForm />
        </div>
    )
    
}

export default Panel;