import React, { useState, useContext } from 'react';
import CommentForm from './Comments/CommentForm';
import { AppContext } from './Context';

function Panel(props){

    //Context
    const {state} = useContext(AppContext);

    console.log("Context State")
    console.log(state.restaurant)
    console.log(state.restaurant.restaurantName)
    return(
        <div style={props.panelStyles} >
            <h3>{state.restaurant.restaurantName}</h3>
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