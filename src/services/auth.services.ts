import axios from "axios";
const URL = `${process.env.REACT_APP_API_URL}auth`;

export interface IUser {
  _id?: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  mobile: string;
  active: boolean;
  role: string;
  verify?: boolean;
  token?: string;
  expireToken?: Date;
}

export interface IAuthSignup {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  mobile: string;
}
export interface IAuthLogin {
  email: string;
  password: string;
}
export interface IAuthResult {
  data: IUser;
  token: string;
  expireTime: number | string;
}
class AuthService {
  getObject() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      mobile: "",
    } as IAuthSignup;
  }

  signIn(body: IAuthLogin) {
    return axios.post<IAuthResult>(URL, body);
  }

  signUp(body: IAuthSignup) {
    return axios.post(URL + "/signup", body);
  }

  forgotPassword(email: string) {}
  verifyEmail() {}
}

const authService = new AuthService();
export { authService };
