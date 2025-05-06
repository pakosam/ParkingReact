import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitBtn = (event: FormEvent) => {
    event.preventDefault();

    fetch("https://localhost:7185/api/Authorizations/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
        birthdate,
        username,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }

        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then((data) => {
        console.log("Response:", data);
        navigate("/signin");
      })
      .catch((error) => {
        console.error("Login error:", error.message);
      });
  };
  return (
    <div id="Register">
      <div className="main-content">
        <div className="header">
          <h3 className="header-name">PARKING PROJECT</h3>
        </div>
        <div className="register-info">
          <h4>REGISTER</h4>
          <div className="sentence">
            <span>Enter your data to register</span>
          </div>
        </div>
        <div className="form-container">
          <form className="form" onSubmit={submitBtn}>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="label" htmlFor="surname">
              Surname
            </label>
            <input
              type="text"
              placeholder="Enter your surname"
              name="surname"
              className="input"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />

            <label className="label" htmlFor="birthdate">
              Birthdate
            </label>
            <input
              type="date"
              placeholder="Enter your birthdate"
              name="birthdate"
              className="input"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />

            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="register-btn">
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
