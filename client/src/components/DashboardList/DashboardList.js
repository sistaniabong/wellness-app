import CommentList from "../Comment/CommentList";
import React, { useState } from "react";
import bubble from "../../assets/comment.png";
import like from "../../assets/heart.png";
import { Link } from "react-router-dom";
import { ADD_LIKE_ACTIVITY } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const DashboardList = ({ activities, username }) => {
  // * function for the like count button
  const [addLike, { error }] = useMutation(ADD_LIKE_ACTIVITY);

  const handleLikeBtn = async (activityId) => {
    try {
      const { data } = await addLike({
        variables: { activityId },
      });
      console.log(activityId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="dashboard-list">
      <div className="container-fluid">
        <h3 id="welcome" style={{textAlign: "center"}}>Hi, welcome!</h3>
        {activities.map((activity) => (
          <div key={activity._id} className="card" 
          id="cardBlock">
            <h6
              id="cardHeader"
              className="card-header teal lighten-2 text-light"
            >
              {activity.user} <br />
              <span style={{ fontSize: "10px" }}>
                completed {activity.title} <br />
                on {activity.createdAt} <br />
                {activity.duration} minute work period
              </span>
            </h6>

            <div className="teal lighten-2 flex-row align-center cardFooter">
              <div id="likecount">{activity.likes}</div>
              <img
                className="dash-btn"
                alt="like button"
                onClick={() => handleLikeBtn(activity._id)}
                src={like}
              />

              <Link
                style={{
                  borderRadius: "10px",
                  textDecoration: "none",
                  color: "black",
                }}
                // className="btn btn-primary btn-block btn-squared"
                // className="m-6 waves-effect waves-light btn-floating"
                to={`/comments/${activity._id}`}
              >
                <img className="dash-btn" alt="comment buttnn" src={bubble} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* <div key={username}>
      <Link
        id="linkbtn"
        style={{
          borderRadius: "10px",
          textDecoration: "none",
          color: "white",
          fontSize: "15px",
          width: "130px",
          // background: "#2b7870",
          // position: "fixed",
        }}
        className="m-2 waves-effect waves-light btn-floating "
        to={`/activitycreate/${username}`}
      >
        Add Activity
      </Link>
      </div> */}
    </div>
  );
};

export default DashboardList;
