import React from 'react';

// Import the `useParams()` hook from React Router
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/Comment/CommentList';
import CommentForm from '../components/Comment/CommentForm';

import { GET_SINGLE_ACTIVITY } from '../utils/queries';
import like from "../assets/heart.png";


const Comment = () => {
    // Use `useParams()` to retrieve value of the route parameter `:profileId`
    const { activityId } = useParams();

    const { loading, data } = useQuery(GET_SINGLE_ACTIVITY, {
        // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
        variables: { activityId: activityId },
    });

    const activity = data?.activity || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="my-3">
            <Link style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }} className="mb-4 align-center" to="/dashboard">← Dashboard</Link>


            <div style={{ width: "300px", borderRadius:"10px" }} className="card">
                <h6
                    id="cardHeader"
                    className="card-header teal lighten-2 text-light"
                >
                    {activity.user} <br />
                    <span style={{ fontSize: "10px" }}>
                        completed {activity.title} <br />
                        on {activity.createdAt} <br />
                        {activity.duration} minutes work period
                    </span>
                </h6>


                <div 
                style={{ borderBottomRightRadius:"10px",borderBottomLeftRadius:"10px" }}
                className="teal lighten-2 flex-row align-center">
                    <a href="">
                        <img
                            className="dash-btn"
                            alt="like button"
                            //   onClick={handleLikeBtn}
                            src={like}
                        />
                    </a>
                </div>
            </div>
            {/* <div className="bg-light py-4">
                <blockquote
                    className="p-4"
                    style={{
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        border: '2px dotted #1a1a1a',
                        lineHeight: '1.5',
                    }}
                >
                    {thought.thoughtText}
                </blockquote>
            </div> */}
            <CommentForm
                activityId={activity._id} />
            <div className="comments-list">
                <CommentList
                    comments={activity.comments}
                />
            </div>
            {/* <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                <CommentForm thoughtId={thought._id} />
            </div> */}
        </div>
    );
};

export default Comment;
