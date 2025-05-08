import { IRegister } from "../api/apiInterface";
import { axiosInstance } from "../api/axiosInstance";

class RegisterRepository {
  async register(credentials: IRegister) {
    const response = await axiosInstance.post("/Authorizations/register", credentials);

    console.log("Register response:", response.data);

    return response.data;
  }
}

export const registerRepository = new RegisterRepository();