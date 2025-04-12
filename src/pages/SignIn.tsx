import "./SignIn.css";
import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitBtn = (event: FormEvent) => {
    event.preventDefault();

    fetch("https://localhost:7185/api/Authorizations/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((json) => {
        const bearerToken = json.token;
        localStorage.setItem("loginData", bearerToken);
        if(json) {
          navigate('/parkings')
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });

    console.log(username);
    console.log(password);
    console.log("Form submitted successfully");

  };

  return (
    <>
      <div id="SignIn">
        <div className="main-content">
          <div className="parking-project-div">
            <h3 className="parking-project-text">PARKING PROJECT</h3>
          </div>
          <div className="info">
            <h4>SIGN IN</h4>
            <div className="info-sentence">
              <span>Enter your credentials to access your account</span>
            </div>
          </div>
          <div className="form-div">
            <form>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                required
              />

              <label htmlFor="psw">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="psw"
                required
              />

              <button type="submit" className="signinbtn">
                SIGN IN
              </button>
            </form>
          </div>
          <div className="psw-opt">
            <span className="question">Forgot your password?<span className="action">Reset password</span></span>
          </div>
        </div>
      </div>
    </>
  );
};
