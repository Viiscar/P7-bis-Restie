import React, {useState} from 'react';
import CommentList from './CommentList';

function CommentForm(props){
    //Props & State
    const selectedRestaurant = props.selectedRestaurant;
    const [stars, setStars] = useState("-");
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");

    //Stars Selected
    function handleClick(e){
        setStars(parseInt(e.target.value));
    }

    //Comment
    function handleFieldChange(e) {
        setComment(e.target.value) /// onchange --> update
    }

    //Adds comment on submit
    function onSubmit(e){

        e.preventDefault();
        if (stars !== "-" && comment !== ""){
            setError("");
            selectedRestaurant.ratings.push({stars: stars, comment: comment})

            props.setSelectedRestaurant({...selectedRestaurant})
            setComment("")

        } else {
            setError("Veullez selectionner une note et écrire un commentaire");
        }
    }

    //If comment and rate are not added it will display an error mesage
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
            <CommentList ratings={selectedRestaurant.ratings}/>
        </>
    )

}

export default CommentForm;