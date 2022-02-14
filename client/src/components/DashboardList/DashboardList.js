import CommentList from '../Comment/CommentList'
import React, { useState } from 'react';
import bubble from '../../assets/comment.png'
import like from '../../assets/heart.png'

const DashboardList = ({ activities }) => {

    console.log('init Dashboard list')
    console.log(activities)



    // * function for the like count button
    const [likeState, setlikeState] = useState(0)
    const [commentState, setCommentState] = useState('')
    const [comments, setComments] = useState([])

    // commented out because of infinite loop err - checking later
    // const handleLikeBtn = (event) => {
    //     event.preventDefault();
    //     setlikeState(likeState++)
    // }

    // setComments(comments.map(comment => {
    //     console.log(comments);
    //     return { ...comments, comment }
    // }))


    // return (
    //     <div>
    //         <div class="container-fluid">
    //         <h3>Hi, welcome!</h3>
    //             {activities &&
    //                 activities.map((activity) => (
    //                 <div key={activity._id} className="card mb-3">
    //                     <h4 className="card-header bg-primary text-light p-2 m-0">
    //                     {user} <br />
    //                     <span style={{ fontSize: '1rem' }}>
    //                         accomplished this goal on {users.reminders.createdAt}
    //                     </span>
    //                      </h4>
    //         <div className="card-body bg-light p-2">{users &&
    //                 users.map((user) => (
    //                     <div key={users.reminders}>
    //                         <p>{user.reminders}</p>
    //           <p>{users.reminders.complete_count}</p>
    //                     </div>
    //                 ))} 
    //         </div>
    //         <div>
    //             {/* comment and like button */}
    //             <img src={like}><p>{likeState}</p></img>
    //             <button onClick={( {activityId}) => <CommentForm commentState={setCommentState} />}><img src={bubble}></img></button>
    //         </div>
    //       </div>
    //     ))}
    //         </div>  
    //         <a className="comments" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Comments</a>
    //            <div className="collapse multi-collapse" id="multiCollapseExample1">
    //                <CommentList comments={setComments}/> 
    //            </div>



    //     </div>
    // )

    // const displayReminders = () =>{
    //     const remind = activities.reminders[i]
    //     for (var i=0; i < remind.length; i++){
    //         return `
    //             {activity.reminders[0].title} --
    //                             complete_count :{activity.reminders[0].complete_count}  <br/>
            
    //         `
    //     }
    // }

    return (
        <div>
            <div className="container-fluid">
                <h3>Hi, welcome!</h3>
                    {activities.map((activity) => (
                        <div key={activity._id} className="card">
                            <h6 className="card-header teal lighten-2 text-light">
                                {activity.user} <br />
                                <span style={{ fontSize: '10px' }}>
                                    completed on {activity.createdAt} <br/>
                                    for {activity.duration} mintues
                                </span>
                            </h6>
                            
                            <div id='reminder-title'>
                                {/* Add for loop */}
                                {activity.reminders[0].title} --
                                complete_count :{activity.reminders[0].complete_count}  <br/>
            
                            </div>
                            <div className="teal lighten-2 flex-row align-center">
                                <a href=""><img className="dash-btn" alt="like button" src={like}/></a>
                                <a><img className="dash-btn" alt="comment buttnn" src={bubble}/></a>
                            </div>

                        </div>
                    ))}
                    <div className="card-header rg-primary text-light p-2 m-0">
                                <p>fff</p>
                            </div>
            </div>
            {/* SB task */}
            {/* add links to each activity card and that page shows comments and commentform (maybe) */}
            {/* reagin task */}
            {/* clean up dashboard list, add new activity and performance buttons
            add heart/thumbs up and comments bubble on each card 
            */}

        </div>
    )

    // return (
    //     <div className='activities-container'>
    //         <h3>Hi, welcome!</h3>
    //         <ul className='activities-list'>
    //             {activities.map(activity => (
    //                 {activity.user}
    //             ))}
                
    //         </ul>  
    //     </div> 
    // )
}

export default DashboardList;