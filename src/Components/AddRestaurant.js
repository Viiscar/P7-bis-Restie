import React, {useState, useContext} from 'react';
import { AppContext } from './Context';
//import $ from 'jquery';

function AddRestaurant(props){

    //Context
    const {state} = useContext(AppContext);

    //Click geolocation
    const [newRestLat] = useState(props.newRestLat);
    const [newRestLng] = useState(props.newRestLng);

    console.log(newRestLng);

    //On submit
    function handleSubmit(e) {
        //e is undefined

        // let newRestaurant = {
        //     restaurantName: e.target[0].value,
        //     address: e.target[1].value,
        //     lat: newRestLat,
        //     long: newRestLng,
        //     ratings: {
        //         stars: "",
        //         comment: ""
        //     }
        // }

        // state.restaurant.push(newRestaurant);

       console.log("e")
    
        //e.preventDefault();
    
        //fermeture du modal
        //$("#myModal .close").click()
    }
    
    return (
        // Modal
        <div className="modal hide fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
            <div className="modal-dialog modal-lg">
                {/* Modal content */}
                <div className="modal-content">
        
                    <div className="modal-header">
                        <h4 className="modal-title">Veuillez ajouter votre restaurant</h4>
                        <button type="button" class="close"  aria-hidden="true" data-dismiss="modal">&times;</button>
                    </div>
            
                    <div className="modal-body">
                        <form role="form" onSubmit={handleSubmit()}>
                            <input type= "text" name = "restaurant" placeholder = "Nom du restaurant" /><br /><br />
                            <input type = "text" name = "adresse"placeholder= "Adresse du restaurant" />
                            <br /><br /> 
                            <input type = "submit" value = "Envoyer"/>      
                        </form>
                    </div>

            
                    <div className="modal-footer">
                        <button type="button" class="btn btn-danger" aria-hidden="true" data-dismiss="modal">Close</button>
                    </div>
        
                </div>
            </div>
        </div>

    )


}

export default AddRestaurant;