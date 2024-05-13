import "./NavBar.css";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../../API";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NavBar: React.FC = (): JSX.Element => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [creatingPost, setCreatingPost] = useState(false);

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    logout();
    navigate("/");
  };

  const handlePost = async () => {
    try {
      setCreatingPost(true);
      const result = await axios.post(
        API.createPost,
        {
          title: postTitle,
          body: postBody,
        },
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      );
      if (result) {
        toast.success(`New Post Added!`, {
          position: "bottom-right",
        });
        setOpenCreatePostModal(false);
      }
    } catch (error) {
      toast.error(`Error Occurred:`, {
        position: "bottom-right",
      });
      setOpenCreatePostModal(false);
    } finally {
      setCreatingPost(false);
    }
  };

  return (
    <nav>
      {/* LoggedIn -> Show Create Post & Logout Button  */}
      {/* LoggedOut -> Show Register & Login Button  */}
      {token ? (
        <div className="main-nav">
          <NavLink className="navbar-brand ml-4" to="/">
            Post-Comments Service
          </NavLink>
          <div className="btn-container">
            <Button
              className="btn btn-outline-light my-2 my-sm-0 mr-4"
              onClick={() => {
                setOpenCreatePostModal(true);
                setPostTitle("");
                setPostBody("");
              }}
              color="success"
            >
              Create Post
            </Button>
            <Button
              className="btn btn-outline-light my-2 my-sm-0 mr-4"
              color="error"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      ) : (
        <div className="main-nav">
          <NavLink className="navbar-brand ml-4" to="/">
            Post-Comments Service
          </NavLink>
          <div className="btn-container">
            <Button
              className="btn btn-outline-light my-2 my-sm-0 mr-4"
              type="submit"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
            <Button
              className="btn btn-outline-light my-2 my-sm-0 mr-4"
              type="submit"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
        </div>
      )}

      {/* Create Post Modal  */}
      <Modal
        open={openCreatePostModal}
        onClose={() => setOpenCreatePostModal(false)}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Post
          </Typography>
          <form onSubmit={handlePost}>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className="mb-3"
            />
            <TextField
              fullWidth
              label="Body"
              variant="outlined"
              multiline
              rows={5}
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
              className="mb-3"
            />
            <div className="d-flex justify-content-end">
              <Button
                variant="outlined"
                onClick={() => setOpenCreatePostModal(false)}
                className="mr-2"
              >
                Cancel
              </Button>
              {creatingPost ? (
                <Button type="submit" variant="contained">
                  <center>
                    <ClipLoader color="white" size={15} />
                  </center>
                </Button>
              ) : (
                <Button type="submit" variant="contained">
                  Post
                </Button>
              )}
            </div>
          </form>
        </Box>
      </Modal>
    </nav>
  );
};

export default NavBar;
