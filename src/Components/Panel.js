import React, { useContext } from 'react';
import CommentForm from './Comments/CommentForm';
//import Photos from './Photos';
import { AppContext } from './Context';

function Panel(props){

    //Context
    const {state} = useContext(AppContext);
    const lat =  state.restaurant.lat;
    const long = state.restaurant.long;
    const streetView = "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=" + lat + "," + long + "9&fov=80&heading=70&pitch=0&key=AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs"

    return(
        <div style={props.panelStyles} >
            <h3>{state.restaurant.restaurantName}</h3>
            <img src={streetView}/>
            {/* < Photos /> */}
            <h6>Adresse:</h6>
            <p>{state.restaurant.address}</p>
            <h6>Average stars:</h6>
            <p>{state.restaurant.average}</p>
            <h6>Comments:</h6>
            <CommentForm />
        </div>
    )
    
}

export default Panel;