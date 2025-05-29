import { IAddEmployee, IDelete, IEmployees, IUpdateEmployee } from "../api/apiInterface";
import { axiosInstance } from "../api/axiosInstance";

class EmployeeRepository {
  async getAllEmployees(): Promise<IEmployees[]> {
    const response = await axiosInstance.get<IEmployees[]>("/Employees");
    return response.data;
  }

  async getSingleEmployee(id: number) {
    const response = await axiosInstance.get<IEmployees>(`/Employees/${id}`);
    return response.data
  }

  async deleteEmployee({ id }: IDelete): Promise<IDelete> {
    const response = await axiosInstance.delete<IDelete>(`/Employees?id=${id}`);
    return response.data;
  }

  async addEmployee(credentials: IAddEmployee, parkingId: number) {
    const response = await axiosInstance.post(`/Employees?parkingId=${parkingId}`, credentials);
    return response.data;
  }

  async updateEmployee(credentials: IUpdateEmployee, parkingId: number) {
    const response = await axiosInstance.put(`/Employees?parkingId=${parkingId}`, credentials);
    return response.data
  }
}

export const employeeRepository = new EmployeeRepository();
