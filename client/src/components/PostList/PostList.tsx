import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../../API";
import PostCard from "../Post/PostCard";
import NavBar from "../NavBar/NavBar";
import { useAuth } from "../../context/AuthContext";
import "./PostList.css";

interface PostItem {
  _id: string;
  title: string;
  body: string;
  userId: { name: string };
  createdAt: Date;
}

const PostList: React.FC = (): JSX.Element => {
  const { token } = useAuth();
  const [posts, setPosts] = useState<PostItem[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getAllPosts() {
      try {
        const result = await axios.get(API.getAllPosts, {
          headers: {
            token: `Bearer ${token}`,
          },
        });
        if (result.data) {
          setPosts(result.data);
          setLoading(false);
        }
      } catch (error: any) {
        toast.error(`${error.message}`, {
          position: "bottom-right",
        });
        setLoading(false);
      }
    }
    getAllPosts();
  }, [token]);

  return (
    <div>
      <NavBar />
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {posts?.map((post) => (
              <div key={post._id}>
                <PostCard
                  id={post._id}
                  title={post.title}
                  body={post.body}
                  userName={post.userId.name}
                  createdAt={post.createdAt}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;
