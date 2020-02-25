import React, {useState} from 'react';

function CommentForm(){

    const [stars, setStars] = useState("-");
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");

    function handleClick(e){
        setStars(e.target.value);
    }

    function handleFieldChange(e) {
        setComment(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault();

        if (stars !== "-" && comment !== ""){
            console.log(comment + stars);
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

                <div className="form-group">
                    <input
                    type="hidden"
                    onChange={handleFieldChange}
                    value={"this.props.index"} //récupérer index de restaurant.js useparams
                    className="form-control"
                    name="index"
                    />
                </div>

                {renderError()}

                <div className="form-group">
                    <button className="btn btn-primary" >
                    Comment &#10148;
                    </button>
                </div>
        </form>
        </>
    )

}

export default CommentForm;