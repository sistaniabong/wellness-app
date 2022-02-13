import CommentList from '../components/Comment/CommentList'
import React, { useState } from 'react';
import bubble from '../../../Sample/comment.png'
import like from '../../../Sample/thumb-up.png'

const DashboardList = () => {
    // * function for the like count button
    const [likeState, setlikeState] = useState(0)

    const handleLikeBtn = (event) => {
        event.preventDefault();
        setlikeState(likeState++) 
    }

    // const handleCommentBtn = () => {
    //     <CommentForm />
    // } 
    
    return (
        <div>
            <div class="container-fluid">
            <h3>{title}</h3>
                {users &&
                    users.map((user) => (
                    <div key={users._id} className="card mb-3">
                        <h4 className="card-header bg-primary text-light p-2 m-0">
                        {user} <br />
                        <span style={{ fontSize: '1rem' }}>
                            accomplished this goal on {users.reminders.createdAt}
                        </span>
                         </h4>
            <div className="card-body bg-light p-2">{users &&
                    users.map((user) => (
                        <div key={users.reminders}>
                            <p>{user.reminders}</p>
              <p>{users.reminders.complete_count}</p>
                        </div>
                    ))} 
            </div>
            <div>
                {/* comment and like button */}
                <img src={like}><p>{likeState}</p></img>
                <button onClick={( {activityId}) => <CommentForm />}><img src={bubble}></img></button>
            </div>
          </div>
        ))}
            </div>  
            <a className="comments" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Comments</a>
               <div className="collapse multi-collapse" id="multiCollapseExample1">
                   <CommentList /> 
               </div>
            
            
             
        </div>
    )
}

export default DashboardList;