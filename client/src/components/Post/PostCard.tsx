import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PostCard.css";

interface PostCardProps {
  id: string;
  title: string;
  body: string;
  userName: string;
  createdAt: Date;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  body,
  userName,
  createdAt,
}): JSX.Element => {
  return (
    <Link
      to={`/post/${id}`}
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
    >
      <div className="card-link">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p
              className="card-text"
              style={{ height: "4.5rem", overflow: "auto" }}
            >
              {body}
            </p>
            <div className="post_info">
              <p>
                Posted By: <br />
                {userName}
              </p>
              <p>
                Posted at: <br />
                {new Date(createdAt).toLocaleString()}
              </p>
            </div>
            <Link to={`/post/${id}`} className="btn btn-primary add_comment">
              Add Comment
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
