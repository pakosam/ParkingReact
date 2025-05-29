import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./UpdateEmployee.css";
import { parkingRepository } from "../../repositories/parkingRepository";
import { IUpdateEmployee } from "../../api/apiInterface";
import { employeeRepository } from "../../repositories/employeeRepository";

export const UpdateEmployee = () => {
  const navigate = useNavigate()

  const { employeeId, parkingIdAsParam } = useParams();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [parkingId, setParkingId] = useState(0);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await employeeRepository.getSingleEmployee(Number(employeeId));

        const [firstName, lastName] = data.fullName.split(" ");

        setId(data.id);
        setName(firstName);
        setSurname(lastName);
        setBirthDate(data.birthDate);
        setParkingId(data.parkingId);
      } catch (err) {
        console.error("Failed to load employee", err);
      }
    };

    fetchEmployee();
  }, [employeeId]);

  const submitBtn = async (event: FormEvent) => {
    event.preventDefault();

    const updatedEmployee: IUpdateEmployee = {
      id,
      name,
      surname,
      birthDate,
    };

    try {
      await employeeRepository.updateEmployee(updatedEmployee, parkingId);
      navigate("/employees");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="update-employee">
      <div className="main-content">
        <div className="update-employee-sentence">
          <h4>UPDATE EMPLOYEE</h4>
        </div>
        <div className="form-container">
          <form className="form" onSubmit={submitBtn}>
            <label className="label" htmlFor="id">
              ID
            </label>
            <input
              type="number"
              name="id"
              className="input"
              value={id}
              readOnly
            />
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
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
              name="surname"
              className="input"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />

            <label className="label" htmlFor="birthDate">
              Birthdate
            </label>
            <input
              type="date"
              name="birthDate"
              className="input"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />

            <label className="label" htmlFor="parkingId">
              Parking ID
            </label>
            <input
              type="number"
              name="parkingId"
              className="input"
              value={parkingId}
              onChange={(e) => setParkingId(Number(e.target.value))}
              required
            />

            <button type="submit" className="register-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
