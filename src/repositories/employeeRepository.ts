import { IEmployees } from "../api/apiInterface";
import { axiosInstance } from "../api/axiosInstance";

class EmployeeRepositoryClass {
  async getAllEmployees(): Promise<IEmployees[]> {
    const bearerToken = localStorage.getItem("loginData") || "";
    const response = await axiosInstance.get<IEmployees[]>("Employees", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response.data;
  }
}

export const employeeRepository = new EmployeeRepositoryClass();
