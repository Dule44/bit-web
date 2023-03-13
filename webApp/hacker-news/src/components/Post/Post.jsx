import React from "react";
import "./Post.css";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";

const Post = ({ number, title, points, author, time, comments, storyUrl }) => {
  return (
    <div className="post">
      <div className="postTitle">
        <h2>
          {number}. {title} ({storyUrl})
        </h2>
      </div>
      <div className="postInfo">
        <span>
          <i className="fa fa-heart"></i> {points} points
        </span>
        <span>
          <i className="fa fa-user"></i> {author}
        </span>
        <span>
          <i className="fa fa-clock-o"></i> <TimeAgo datetime={time} />
        </span>

        <span className="postComments">{comments} comments</span>
      </div>
    </div>
  );
};

export { Post };