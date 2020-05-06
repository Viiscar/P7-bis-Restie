import React from 'react';
import { useForm } from "react-hook-form";

function AddRestaurant(props){

    const { register, handleSubmit, errors } = useForm()
    const { show, closeModal } = props;

    //When submiting form
    const onSubmit = data => {

        let newRestaurant = {
                restaurantName: data.restaurant,
                address: data.adresse,
                lat: props.newRestLat,
                long: props.newRestLng,
                ratings: []
            }
        props.restaurants.push(newRestaurant);
    }

    return (
        <>
            <div className={show ? "modaleeee" : "hideeee"}>
                <button onClick={closeModal}>&times;</button>
                <h4>Veuillez ajouter votre restaurant</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="restaurant"  ref={register({ required: true })} placeholder = "Nom du restaurant" /> {errors.restaurant && <span>This field is required</span>}<br /><br />
                    <input name="adresse" ref={register({ required: true })} placeholder= "Adresse du restaurant"/> {errors.adresse && <span>This field is required</span>}<br /><br />
                    <input type="submit" onClick={closeModal}/>
            </form>
            </div>
        </>
    )
}

export default AddRestaurant;