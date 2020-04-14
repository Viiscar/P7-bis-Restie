import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from './Context';
import {Marker} from 'google-maps-react';

function NearbySearch(){

    const {state} = useContext(AppContext);
    const [nearbySearch, setNearbySearch] = useState(undefined);
    
    useEffect(() => {
        const fetchData = async () => {
          const fetchResult = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.4663,-66.1057&radius=500&type=restaurant&key=AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs')
            .then(response => response.json());
    
        setNearbySearch(fetchResult);
        
        //faire un context push     state.restaurant.push is not a function
    
        fetchResult.results.map((rest, index) => 
    
          state.restaurant.push({
            restaurantName:rest.name,
            address:rest.vicinity,
            lat:rest.geometry.location.lat,
            long:rest.geometry.location.lng,
            ratings: {stars: "", comment: ""},
            average: rest.rating,
            index: index + 6
          })
        )
        
        console.log("fetchResult",fetchResult);
        // console.log("f",fetchResult.results[0].geometry.location);
        // console.log("f",fetchResult.results[0].name);
        // console.log("f",fetchResult.results[0].id);
        //console.log("f",fetchResult.results[0].rating)
        // console.log("f",fetchResult.results[0].vicinity)
        }
        fetchData();
      }, []);


    
      

    return(
         /* Adding Google Place Markers */
         nearbySearch !== undefined ?
            nearbySearch.results.map((rest, index) =>
              <Marker
                
                title={rest.name}
                name={rest.name}
                index={rest.id}
                position={rest.geometry.location}
              />
            )
            : console.log("failed")
    )

}

export default NearbySearch;