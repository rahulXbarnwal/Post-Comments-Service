import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "./Post.css";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import NavBar from "../NavBar/NavBar";
import { ClipLoader } from "react-spinners";

interface PostItem {
  title: string;
  body: string;
  comments: {
    message: string;
    createdAt: Date;
    user: { name: string };
  }[];
}

const Post: React.FC = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [post, setPost] = useState<PostItem>();
  const [commentContent, setCommentContent] = useState("");
  const [loader, setLoader] = useState<boolean>(true);

  const handleCommentSubmit = async () => {
    try {
      await axios.post(
        `${API.addComment}/${id}`,
        { message: commentContent },
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      );
      getPostData();
      setCommentContent("");
      toast.success(`Comment added successfully!`, {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error(`Error occurred while adding comment`, {
        position: "bottom-right",
      });
    }
  };

  async function getPostData() {
    try {
      setLoader(true);
      const result = await axios.get(`${API.getPost}/${id}`, {
        headers: {
          token: `Bearer ${token}`,
        },
      });
      if (result) setPost(result.data);
    } catch (error) {
      toast.error(`Error Occurred:`, {
        position: "bottom-right",
      });
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    getPostData();
  }, [id, token]);

  return (
    <>
      <NavBar />
      {loader ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="container mt-4">
          {post && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          )}
          <div className="mt-4">
            <h5>Add Comment</h5>
            <RichTextEditor onChange={setCommentContent} />
            <button
              className="btn btn-primary add_comment_btn"
              onClick={handleCommentSubmit}
            >
              Post Comment
            </button>
          </div>

          <div className="mt-4">
            <h5>Comments</h5>
            {post?.comments.map((comment, index) => (
              <div key={index} className="card mb-2">
                <div className="card-body card-body-post">
                  <div dangerouslySetInnerHTML={{ __html: comment.message }} />
                  <div>
                    <p className="card-text">
                      <small>Comment by {comment.user.name}</small>
                    </p>
                    <p className="card-text">
                      <small>
                        Posted on {new Date(comment.createdAt).toLocaleString()}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
