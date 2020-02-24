import React from 'react';

function Panel(props){

    return(
        <div style={props.panelStyles} >
            <h3>{props.restaurantName}</h3>
            <h6>Adresse:</h6>
            <p>{props.restaurantAddrs}</p>
            <h6>Average stars:</h6>
            <p>{props.restaurantAverage}</p>
            <h6>Comments:</h6>
        </div>
    )
    
}

export default Panel;