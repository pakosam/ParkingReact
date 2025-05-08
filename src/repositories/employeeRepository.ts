import { IDelete, IEmployees } from "../api/apiInterface";
import { axiosInstance } from "../api/axiosInstance";

class EmployeeRepository {
  async getAllEmployees(): Promise<IEmployees[]> {
    const bearerToken = localStorage.getItem("loginData") || "";
    const response = await axiosInstance.get<IEmployees[]>("/employees", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response.data;
  }

  async deleteEmployee({ id }: IDelete): Promise<IDelete> {
    const bearerToken = localStorage.getItem("loginData") || "";
    const response = await axiosInstance.delete<IDelete>(
      `/Employees?id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    return response.data;
  }
}

export const employeeRepository = new EmployeeRepository();
