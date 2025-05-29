import "./EmployeeView.css";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { EmployeeActions } from "./EmployeeActions";
import { EmployeeRowActions } from "./EmployeeRowActions";
import React, { useEffect, useState } from "react";
import { IEmployees, IParkings } from "../../api/apiInterface";
import { data, useNavigate } from "react-router-dom";
import { employeeRepository } from "../../repositories/employeeRepository";
import { parkingRepository } from "../../repositories/parkingRepository";

export const EmployeeView = () => {
  const [employees, setEmployees] = useState<IEmployees[]>();
  const navigate = useNavigate();
  

  useEffect(() => {
    const allEmployees = async () => {
      const data = await employeeRepository.getAllEmployees();
      setEmployees(data);
    };

    allEmployees();
  }, []);

  const updateEmployee = (id: number) => {
    /*const selectedParkingId = async () => {
      const parking =  await parkingRepository.getSingleParking(id)
      return parking.id
    }*/

    const selectedEmployee = employees?.find((employee) => employee.id === id);
    if (selectedEmployee) {
      navigate(`/employees/${selectedEmployee.id}/update-employee`);
    }
  }

  const deleteEmployee = async (id: number) => {
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
                <EmployeeRowActions
                  onUpdateClick={() => updateEmployee(employee.id)}
                  onDeleteClick={() => deleteEmployee(employee.id)}
                />
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
