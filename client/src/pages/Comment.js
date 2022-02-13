import React from 'react';

// Import the `useParams()` hook from React Router
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/Comment/CommentList';
import CommentForm from '../components/Comment/CommentForm';

import { GET_SINGLE_ACTIVITY } from '../utils/queries';

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
            <Link style={{ textDecoration: 'none', color: 'black', fontSize:'20px'}} className="mb-4 align-center" to="/dashboard">← Dashboard</Link>
            <h4 className="card-header bg-primary text-light p-2 m-0">
                {activity.user} <br />
                <span style={{ fontSize: '1rem' }}>
                    accomplished {activity.title} for {activity.duration} min
                </span>
            </h4>
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
