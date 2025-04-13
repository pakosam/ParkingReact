import { IParkings } from "../api/apiInterface";
import { axiosInstance } from "../api/axiosInstance";

class ParkingRepositoryClass {
  async getAllParkings(): Promise<IParkings[]> {
    const bearerToken = localStorage.getItem("loginData") || "";
    const response = await axiosInstance.get<IParkings[]>("Parkings", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response.data;
  }
}

export const parkingRepository = new ParkingRepositoryClass();
