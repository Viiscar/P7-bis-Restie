import React, { useState, useEffect } from 'react';

function nearbySearch(){

    const [nearbySearch, setNearbySearch] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
          const fetchResult = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.4663,-66.1057&radius=500&type=restaurant&key=AIzaSyBC2qgPQ2fK60hEy74CACKeZZ6zVT4MBcs')
            .then(response => response.json());
          
        setNearbySearch(fetchResult);
        
        console.log("f",fetchResult);
        // console.log("f",fetchResult.results[0].geometry.location);
        // console.log("f",fetchResult.results[0].name);
        // console.log("f",fetchResult.results[0].id);
    
        }
        fetchData();
    }, []);

    // il y a un truc qui tourne pas rond dans cette fonction
    function searchMarker(){
        if (nearbySearch !== ""){
            console.ĺog("ok")
            nearbySearch.results.map((rest, index) => 
                <Marker
                    onClick={onMarkerClick}
                    title={rest.name}
                    name={rest.name}
                    index={rest.id}
                    position={rest.geometry.location} 
                />
            )
        }else {
            console.log("failled");
        }
    }

   


    return(
        searchMarker()
    )

}

export default nearbySearch;