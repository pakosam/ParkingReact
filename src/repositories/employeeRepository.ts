import { IDelete, IEmployees } from "../api/apiInterface";
import { axiosInstance } from "../api/axiosInstance";

class EmployeeRepository {
  async getAllEmployees(): Promise<IEmployees[]> {
    const response = await axiosInstance.get<IEmployees[]>("/employees");
    return response.data;
  }

  async deleteEmployee({ id }: IDelete): Promise<IDelete> {
    const response = await axiosInstance.delete<IDelete>(`/Employees?id=${id}`);
    return response.data;
  }
}

export const employeeRepository = new EmployeeRepository();
