import React from "react";
import { Redirect, useParams } from 'react-router-dom';




// component for comment modal
const CommentList = ({ comments = [] }) => {

  // const { activityId } = useParams();

  console.log(comments);
  if (!comments.length) {
    return (
    <h3></h3>);
  }

  return (
    <div>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div style={{ background: 'teal' }} className="waves-effect waves-light text-light flex-row">
                <p className="card-body">{comment.commentText}</p>
                <h5 className="card-header">
                  {/* {user} commented {' '} */}
                  <span style={{ fontSize: '0.825rem' }}>
                   {comment.createdAt}
                  </span>
                </h5>
              </div>
            </div>
          ))}
          
      </div>
      <div>
      </div>
      
    </div>
  );
}

export default CommentList;