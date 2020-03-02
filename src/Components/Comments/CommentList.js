import React, {useState, useEffect} from 'react';
import Comment from './Comment';

function CommentList(props){

    //console.log("props: " , props)

    const [ratings, setRatings] = useState([]);
    
    useEffect(() => {
        setRatings(props.restaurantSelected.ratings);
    }, [props.restaurantSelected])


    return(
        ratings ?   
        <div className="commentList">
            <h5 className="text-muted mb-4">
                <span className="badge badge-success">{ratings.length}</span>
                Comment{ratings.length > 0 ? "s" : ""}
            </h5>

            {ratings.length === 0  ? (
                <div className="alert text-center alert-info">
                Be the first to comment
                </div>
            ) : null}
            
            {ratings.map((rate, index) => (
                <Comment key={index} comment={rate.comment} stars={rate.stars} />
            ))}

        </div>

        : <div>Loading</div>
    );
}

export default CommentList;