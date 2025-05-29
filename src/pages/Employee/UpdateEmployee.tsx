import { FormEvent, useEffect, useState } from "react";
import "./UpdateEmployee.css";
import { employeeRepository } from "../../repositories/employeeRepository";
import { IEmployees, IUpdateEmployee } from "../../api/apiInterface";

export const UpdateEmployee = () => {
  const [dbEmployee, setDbEmployee] = useState<IEmployees>();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthDate, setBirthdate] = useState("");

  const extractIdFromPath = () => {
    const parts = window.location.pathname.split("/");
    console.log(parts)
    const idIndex = parts.indexOf("employees") + 1;
    console.log(idIndex)
    const id = parseInt(parts[idIndex], 10);
    console.log(id)
    return isNaN(id) ? null : id;
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      const id = extractIdFromPath();
      if (!id) return;
  
      try {
        const data = await employeeRepository.getSingleEmployee(id);
        data.fullName.split(" ")
        const name = data.fullName[0]
        const surname = data.fullName[1]
        
        setDbEmployee(data);

        setId(data.id);
        setName(name);
        setSurname(surname);
        setBirthdate(data.birthDate);
      } catch (err) {
        console.error("Failed to load employee", err);
      }
    };
  
    fetchEmployee();
  }, []);

  

  const submitBtn = async (event: FormEvent) => {
    event.preventDefault();

    const id = extractIdFromPath();
    if (!id) return;

    const updatedEmployee: IUpdateEmployee = {
      id,
      name,
      surname,
      birthDate,
    };

    try {
      await employeeRepository.updateEmployee(updatedEmployee, id);
    } catch (err) {
      console.error("Failed to update employee", err);
    }

    if (!dbEmployee) return null
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

            <label className="label" htmlFor="birthDate">
              Birthdate
            </label>
            <input
              type="date"
              name="birthDate"
              className="input"
              value={birthDate}
              onChange={(e) => setBirthdate(e.target.value)}
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
