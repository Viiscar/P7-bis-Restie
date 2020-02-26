import React, {useState} from 'react';
import Comment from './Comment';

function CommentList(props) {

    console.log("props: " , props)

    const [index] = useState(props.restaurantIndex);
    const [restaurants] =useState(props.restaurants);
    

    console.log(index); // si je l'enlève j'ai cette erreur: TypeError: restaurants[index] is undefined



    return(
        <div className="commentList">
            <h5 className="text-muted mb-4">
                <span className="badge badge-success">{restaurants[index].ratings.length}</span>{" "}
                Comment{restaurants[index].ratings.length > 0 ? "s" : ""}
            </h5>

            {restaurants[index].ratings.length === 0  ? (
                <div className="alert text-center alert-info">
                Be the first to comment
                </div>
            ) : null}
            
            {restaurants[index].ratings.map((rate, index) => (
                <Comment key={index} comment={rate.comment} stars={rate.stars} />
            ))}

        </div>
    );
}

export default CommentList;