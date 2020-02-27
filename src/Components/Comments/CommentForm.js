import React, {useState} from 'react';
import CommentList from './CommentList';

function CommentForm(props){
    const [restaurants, setRestaurants] = useState(props.restaurants);
    const [stars, setStars] = useState("-");
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    const [restaurantIndex] = useState(props.restaurantIndex);

    function handleClick(e){
        setStars(parseInt(e.target.value));
    }

    function handleFieldChange(e) {
        setComment(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault();
        //récupere l'index qu'une fois
        if (stars !== "-" && comment !== ""){
            setError("");
            console.log("avant ", restaurants);
            console.log("Restindex " , restaurants[restaurantIndex]); // deviens undefined au 2e submit
            const newRest = restaurants[restaurantIndex].ratings.push({stars: stars, comment: comment});
            console.log("newRest" , newRest);
            setRestaurants(newRest);
            console.log("après " , restaurants);
            console.log("index"+ restaurantIndex);
        } else {
            setError("Veullez selectionner une note et écrire un commentaire");
        }
        
    }

    function renderError() {
        return error ? (
          <div className="alert alert-danger">{error}</div>
        ) : null;
    }
    

    return(
        <>
            <form method="post" onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Selectionnez votre note:</label>
                    <select name="my_html_select_box"  onClick={handleClick} className="form-control">
                        <option value="-">-</option>
                        <option value="1">1 etoiles</option>
                        <option value="2">2 etoiles</option>
                        <option value="3">3 etoiles</option>
                        <option value="4">4 etoiles</option>
                        <option value="5">5 etoiles</option>
                    </select>
                </div>

                <div className="form-group">
                    <textarea
                    onChange={handleFieldChange}
                    value={comment}
                    className="form-control"
                    placeholder="🤔  Votre Commentaire"
                    name="comment"
                    rows="5"
                    />
                </div>

                {renderError()}

                <div className="form-group">
                    <button className="btn btn-primary" >
                    Comment &#10148;
                    </button>
                </div>
            </form>
            <CommentList restaurants={restaurants} restaurantIndex={restaurantIndex}/>
        </>
    )

}

export default CommentForm;