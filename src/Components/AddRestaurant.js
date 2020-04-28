import React, {useState, useContext} from 'react';
import { useForm } from "react-hook-form";
import { AppContext } from './Context';
import ReactDOM from "react-dom";

function AddRestaurant(props){

    //Context
    const {state} = useContext(AppContext);

    //Click geolocation
    const [newRestLat] = useState(props.newRestLat);
    const [newRestLng] = useState(props.newRestLng);

    
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { 
        console.log("rest", data.restaurant);
        console.log("ad", data.adresse);
        let newRestaurant = {
                restaurantName: data.restaurant,
                address: data.adresse,
                lat: props.newRestLat,
                long: props.newRestLng,
                ratings: []
            }
        console.log(newRestaurant);
        
        props.restaurants.push(newRestaurant);
        console.log(props.restaurants);
    }
    
    //console.log(watch('adresse')); // watch input value by passing the name of it
    
        
    const { show, closeModal } = props;
    
    return (

        <>
            <div className={show ? "modaleeee" : "hideeee"}>
                <button onClick={closeModal}>&times;</button>
                <h4>Veuillez ajouter votre restaurant</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
            <input name="restaurant"  ref={register({ required: true })} placeholder = "Nom du restaurant" /> {errors.restaurant && <span>This field is required</span>}<br /><br />
            {/* include validation with required or other standard HTML validation rules */}
            <input name="adresse" ref={register({ required: true })} placeholder= "Adresse du restaurant"/> {errors.adresse && <span>This field is required</span>}<br /><br /> 
            {/* errors will return when field validation fails  */}
            <input type="submit" onClick={closeModal}/>
          </form>
            </div>
        </>

    )


}

export default AddRestaurant;