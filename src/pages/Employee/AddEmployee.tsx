import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AddEmployee.css";
import { employeeRepository } from "../../repositories/employeeRepository";
import { parkingRepository } from "../../repositories/parkingRepository";

export const AddEmployee = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [parkingId, setParkingId] = useState(0);
  const navigate = useNavigate();

  const location = useLocation();

  const submitBtn = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const parkingID = location.state as {
        id: number;
      };
      const result = await employeeRepository.addEmployee(
        {
          name,
          surname,
          birthdate,
          username,
          password,
        },
        parkingID.id
      );
      navigate("/employees");
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="Register">
      <div className="main-content">
        <div className="register-info">
          <h4>ADD EMPLOYEE</h4>
        </div>
        <div className="form-container">
          <form className="form" onSubmit={submitBtn}>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter employee name"
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
              placeholder="Enter employee surname"
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
              placeholder="Enter employee username"
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
              placeholder="Enter employee password"
              name="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="register-btn">
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
