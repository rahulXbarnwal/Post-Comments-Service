import "./Register.css";
import React, { useState } from "react";
import API from "../../API";
import ClipLoader from "react-spinners/ClipLoader";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoader(true);
    try {
      const res = await axios.post(API.register, {
        name: name,
        email: email,
        password: password,
      });
      if (res) {
        toast.success(`Successfully Registered`, {
          position: "bottom-right",
        });
        navigate("/login");
      }
    } catch (err: any) {
      toast.error(`${err.message}`, {
        position: "bottom-right",
      });
    }
    setLoader(false);
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="registration-page">
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className="btns">
            {loader ? (
              <button type="submit" disabled={true}>
                <center>
                  <ClipLoader color="white" size={25} />
                </center>
              </button>
            ) : (
              <button type="submit">Register</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
