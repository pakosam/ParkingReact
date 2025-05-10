import { IRegister, ISignIn } from "../api/apiInterface";
import { axiosInstance } from "../api/axiosInstance";

class UserRepository {
  async register(credentials: IRegister) {
    const response = await axiosInstance.post(
      "/Authorizations/register",
      credentials
    );
    return response.data;
  }

  async signIn(credentials: ISignIn) {
    const response = await axiosInstance.post(
      "/Authorizations/login",
      credentials
    );
    localStorage.setItem("loginData", response.data.token);

    return response.data;
  }
}

export const userRepository = new UserRepository();