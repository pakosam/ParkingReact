import { IParkings } from "../api/apiInterface";
import { axiosInstance } from "../api/axiosInstance";
import { IDelete } from "../api/apiInterface";

class ParkingRepository {
  async getAllParkings(): Promise<IParkings[]> {
    const response = await axiosInstance.get<IParkings[]>("/parkings");
    return response.data;
  }

  async deleteParking({ id }: IDelete): Promise<IDelete> {
    const response = await axiosInstance.delete<IDelete>(`/Parkings?id=${id}`);
    return response.data;
  }
}

export const parkingRepository = new ParkingRepository();
