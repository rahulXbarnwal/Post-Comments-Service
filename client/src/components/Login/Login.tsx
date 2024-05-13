import "./Login.css";
import React, { useEffect, useState } from "react";
import API from "../../API";
import ClipLoader from "react-spinners/ClipLoader";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface LoginData {
  email: string;
  password: string;
}

function Login(): JSX.Element {
  const { login, token } = useAuth();
  const navigate = useNavigate();
  const [loader, setLoader] = useState<boolean>(false);
  const [data, setData] = useState<LoginData>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoader(true);
    if (data.email === "" || data.password === "") {
      setLoader(false);
      toast.warn(`Fields can't be empty!`, {
        position: "bottom-right",
      });
      return;
    }
    try {
      const response = await axios.post(API.login, data);
      const token = response.data.accessToken;
      login(token);
      navigate("/dashboard");
      toast.success(`LoggedIn Successfully!`, {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error(`Error Occurred:`, {
        position: "bottom-right",
      });
    }
    setLoader(false);
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center" }}>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
          {loader ? (
            <button type="submit" disabled={true}>
              <center>
                <ClipLoader color="white" size={25} />
              </center>
            </button>
          ) : (
            <button type="submit">Login</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
