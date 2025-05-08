import { ISignIn } from "../api/apiInterface";
import { axiosInstance } from "../api/axiosInstance";

class SignInRepository {
  async signIn(credentials: ISignIn) {
    const response = await axiosInstance.post("/Authorizations/login", credentials);

    console.log("Login response:", response.data);

    localStorage.setItem("loginData", response.data.token)

    return response.data;
  }
}

export const signInRepository = new SignInRepository();