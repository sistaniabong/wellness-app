import CommentList from "../Comment/CommentList";
import React, { useState } from "react";
import bubble from "../../assets/comment.png";
import like from "../../assets/heart.png";
import { Link } from "react-router-dom";
import { ADD_LIKE_ACTIVITY } from '../../utils/mutations'
import { useMutation } from '@apollo/client';

const DashboardList = ({ activities }) => {
  // * function for the like count button
  const [likeState, setlikeState] = useState(0);
  const [addLike, {error}] = useMutation(ADD_LIKE_ACTIVITY);

  const handleLikeBtn = async (activityId) => {

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = await addlike({
        variables: { ...likeState, activityId},
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div id="dashboard-list">
      <div className="container-fluid">
        <h3>Hi, welcome!</h3>
        {activities.map((activity) => (
          <div key={activity._id} className="card">
            <h6
              id="cardHeader"
              className="card-header teal lighten-2 text-light"
            >
              {activity.user} <br />
              <span style={{ fontSize: "10px" }}>
                completed on {activity.createdAt} <br />
                during {activity.duration} minute work period
              </span>
            </h6>
            <div className="teal lighten-2 flex-row align-center">
              <a href="">
                <img
                  className="dash-btn"
                  alt="like button"
                  onClick={handleLikeBtn}
                  src={like}
                />
              </a>
              <a>
                <img className="dash-btn" alt="comment buttnn" src={bubble} />
              </a>

              <Link
                style={{
                  borderRadius: "10px",
                  textDecoration: "none",
                  color: "black",
                  fontSize: "15px",
                  width: "80px",
                  backgoround: "#2b7870",
                }}
                // className="btn btn-primary btn-block btn-squared"
                className="m-2 waves-effect waves-light btn-floating "
                to={`/comments/${activity._id}`}
              >
                Comments
              </Link>
            </div>
          </div>
        ))}
        {/* <Link
          style={{
            borderRadius: "10px",
            textDecoration: "none",
            color: "black",
            fontSize: "15px",
            width: "80px",
            backgoround: "#2b7870",
          }}
          className="m-2 waves-effect waves-light btn-floating "
          to={`/proplan/${activity._id}`}
        >
          Performance Tracker
        </Link>
        <Link
          style={{
            borderRadius: "10px",
            textDecoration: "none",
            color: "black",
            fontSize: "15px",
            width: "80px",
            backgoround: "#2b7870",
          }}
          className="m-2 waves-effect waves-light btn-floating "
          to={`/activitycreate/${username}`}
        >
          Add Activity
        </Link> */}
      </div>
     
    </div>
  );
};

export default DashboardList;
