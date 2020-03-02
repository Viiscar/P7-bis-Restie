import React, { useState } from 'react';
import CommentForm from './Comments/CommentForm';

function Panel(props){
    const [restaurantSelected] = useState(props.restaurantSelected);
    console.log("props panel.js" , restaurantSelected);
    return(
        <div style={props.panelStyles} >
            <h3>{props.restaurantName}</h3>
            <h6>Adresse:</h6>
            <p>{props.restaurantAddrs}</p>
            <h6>Average stars:</h6>
            <p>{props.restaurantAverage}</p>
            <h6>Comments:</h6>
            <CommentForm  restaurantSelected={restaurantSelected}/>
        </div>
    )
    
}

export default Panel;