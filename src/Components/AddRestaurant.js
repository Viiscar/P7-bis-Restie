import React, {useState, useContext} from 'react';
import { useForm } from "react-hook-form";
import { AppContext } from './Context';
import ReactDOM from "react-dom";
//import $ from 'jquery';

function AddRestaurant(props){

    //Context
    const {state} = useContext(AppContext);

    //Click geolocation
    const [newRestLat] = useState(props.newRestLat);
    const [newRestLng] = useState(props.newRestLng);
    const [val, setVal] = useState("");
    //console.log(newRestLng);

    
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { 
        console.log("rest", data.restaurant);
        console.log("ad", data.adresse);
        let newRestaurant = {
                restaurantName: data.restaurant,
                address: data.adresse,
                lat: "newRestLat",
                long: "newRestLng",
                ratings: {
                    stars: "",
                    comment: ""
                }
            }
        console.log(newRestaurant);
            // state.restaurant.push(newRestaurant);

    }
    
    console.log(watch('adresse')); // watch input value by passing the name of it
    
        
    const { show, closeModal } = props;
    
    console.log("showAdd", show);
    return (
        // Modal
        // <div className={show ? "modaleeee" : "hideeee"}>
        //     <button onClick={closeModal}>X</button>
        //     <h1>Modal heading</h1>
        //     <p>This is modal content</p>
        // </div>

        <>
            {/* <div className={show ? "overlay" : "hideeee"} onClick={closeModal} /> */}
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