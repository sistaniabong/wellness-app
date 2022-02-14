import CommentList from '../Comment/CommentList'
import React, { useState } from 'react';
import bubble from '../../assets/comment.png'
import like from '../../assets/heart.png'
import { Link } from 'react-router-dom';


const DashboardList = ({ activities }) => {
    // * function for the like count button
    const [likeState, setlikeState] = useState(0)
    console.log(activities)

    // commented out because of infinite loop err - checking later
    const handleLikeBtn = (event) => {
        event.preventDefault();
        activites._id.

        setlikeState(likeState++)
        console.log(likeState)
    }
    console.log(likeState)

    return (
        <div id="dashboard-list">
            <div className="container-fluid">
                <h3>Hi, welcome!</h3>
                    {activities.map((activity) => (
                        <div key={activity._id} className="card">
                            <h6 id="cardHeader" className="card-header teal lighten-2 text-light">
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
                                <a href=""><img className="dash-btn" alt="like button" onClick={handleLikeBtn} src={like}/></a>
                                <a><img className="dash-btn" alt="comment buttnn" src={bubble}/></a>
                                <Link
                                style={{ borderRadius: '10px', textDecoration: 'none', color: 'black', fontSize: '15px', width: '80px', backgoround: '#2b7870' }}
                                // className="btn btn-primary btn-block btn-squared"
                                className="m-2 waves-effect waves-light btn-floating "
                                to={`/comments/${activity._id}`}
                            >
                                Comments
                            </Link>
                            </div>
                            

                        </div>
                    ))}
                      
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