import { IAddParking, IParkings, IUpdateParking } from "../api/apiInterface";
import { axiosInstance } from "../api/axiosInstance";
import { IDelete } from "../api/apiInterface";

class ParkingRepository {
  async getAllParkings(): Promise<IParkings[]> {
    const response = await axiosInstance.get<IParkings[]>("/Parkings");
    return response.data;
  }

  async getSingleParking(id: number) {
    const response = await axiosInstance.get<IParkings>(`/Parkings/${id}`);
    return response.data
  }

  async deleteParking({ id }: IDelete): Promise<IDelete> {
    const response = await axiosInstance.delete<IDelete>(`/Parkings?id=${id}`);
    return response.data;
  }

  async addParking(credentials: IAddParking) {
    const response = await axiosInstance.post("/Parkings", credentials);
    return response.data;
  }

  async updateParking(credentials: IUpdateParking) {
    const response = await axiosInstance.put("/Parkings", credentials);
    return response.data
  }
}

export const parkingRepository = new ParkingRepository();
