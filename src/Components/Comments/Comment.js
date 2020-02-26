import React from 'react';

function Comment(props){
    
    return(
        <div className="media mb-3">
        <img
            className="mr-3 bg-light rounded"
            width="48"
            height="48"
            src={`https://api.adorable.io/avatars/48/${props.comment.toLowerCase()}@adorable.png`}
            alt={props.stars}
        />

        <div className="media-body p-2 shadow-sm rounded bg-light border">
            <small className="float-right text-muted">{props.stars}</small>
            <h6 className="mt-0 mb-1 text-muted">Note: {props.stars}</h6>
            {props.comment}
        </div>
        </div>
    )
}

export default Comment;