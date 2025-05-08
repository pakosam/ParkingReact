import "./EmployeeView.css";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { EmployeeActions } from "./EmployeeActions";
import { EmployeeRowActions } from "./EmployeeRowActions";
import React, { useEffect, useState } from "react";
import { IEmployees } from "../../api/apiInterface";
import { data, useNavigate } from "react-router-dom";
import { employeeRepository } from "../../repositories/employeeRepository";

export const EmployeeView = () => {
  const [employees, setEmployees] = useState<IEmployees[]>();

  useEffect(() => {
    employeeRepository
      .getAllEmployees()
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const deleteBtn = async (id: number) => {
    await employeeRepository.deleteEmployee({ id });
    setEmployees((prev) => prev?.filter((employee) => employee.id !== id));
  };

  if (!employees) return null;

  return (
    <div id="EmployeeView">
      <SearchBar />
      <EmployeeActions btnText="ADD NEW EMPLOYEE" />
      <div className="employee-table-container">
        <table className="table-container">
          <tr className="header-row">
            <th></th>
            <th>Full name</th>
            <th>Birthdate</th>
            <th>Parking ID</th>
            <th></th>
          </tr>
          {employees.map((employee, index) => {
            const { image, fullName, birthDate, parkingId } = employee;
            return (
              <tr key={`${index}${fullName}${birthDate}`}>
                <td>
                  <div>
                    <img
                      className="employee-image"
                      src={image || "/assets/employeePicture.png"}
                      alt="real-life-employee"
                    />
                  </div>
                </td>
                <td>{fullName}</td>
                <td>{birthDate}</td>
                <td>{parkingId}</td>
                <EmployeeRowActions id={employee.id} onDeleteClick={deleteBtn} />
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
