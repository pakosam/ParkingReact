import "./SignIn.css";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRepository } from "../../repositories/userRepository";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitBtn = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const result = await userRepository.signIn({ username, password });
      if (result) {
        navigate("/parkings");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
      <div id="Sign-In">
        <div className="main-content">
          <div className="header">
            <h3 className="header-name">PARKING PROJECT</h3>
          </div>
          <div className="sign-in-info">
            <h4>SIGN IN</h4>
            <div className="sentence">
              <span>Enter your credentials to access your account</span>
            </div>
          </div>
          <div className="form-container">
            <form className="form" onSubmit={submitBtn}>
              <label className="label" htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label className="label" htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="input"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <button type="submit" className="sign-in-btn">
                SIGN IN
              </button>
            </form>
          </div>
          <div className="password-footer">
            <span className="reminder-text">
              Forgot your password?
              <span className="interactive-text">Reset password</span>
            </span>
          </div>
        </div>
      </div>
  );
};
