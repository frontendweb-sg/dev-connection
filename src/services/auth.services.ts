import axios from "axios";
const URL = `${process.env.REACT_APP_API_URL}auth`;

export interface IAuth {
  _id?: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  mobile: string;
  active?: boolean;
}

export interface IAuthLogin {
  email: string;
  password: string;
}
class AuthService {
  getObject() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      mobile: "",
    } as IAuth;
  }

  signIn(body: IAuthLogin) {
    return axios.post(URL, body);
  }
  signUp(body: IAuth) {
    return axios.post(URL + "/signup", body);
  }

  forgotPassword(email: string) {}
  verifyEmail() {}
}

const authService = new AuthService();
export { authService };
