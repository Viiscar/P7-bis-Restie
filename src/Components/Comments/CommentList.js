import React, {useState, useEffect, useContext} from 'react';
import Comment from './Comment';
import { AppContext } from '../Context';

function CommentList(props){

    const {state} = useContext(AppContext);
    const [ratings, setRatings] = useState([]);
    
    //Adding ratings to Context restaurant list
    useEffect(() => {
        setRatings(state.restaurant.ratings);
    }, [state.restaurant])

    return(
        ratings ?   
        <div className="commentList">
            <h5 className="text-muted mb-4">
                <span className="badge badge-success">{ratings.length}</span>
                Comment{ratings.length > 0 ? "s" : ""}
            </h5>

            {/* if there are no comments diplay a message */}
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