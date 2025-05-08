import { IParkings } from "../api/apiInterface";
import { axiosInstance } from "../api/axiosInstance";
import { IDelete } from "../api/apiInterface";

class ParkingRepository {
  async getAllParkings(): Promise<IParkings[]> {
    const bearerToken = localStorage.getItem("loginData") || "";
    const response = await axiosInstance.get<IParkings[]>("/parkings", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response.data;
  }

  async deleteParking({ id }: IDelete): Promise<IDelete> {
    const bearerToken = localStorage.getItem("loginData") || "";
    const response = await axiosInstance.delete<IDelete>(`/Parkings?id=${id}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response.data;
  }
}

export const parkingRepository = new ParkingRepository();
