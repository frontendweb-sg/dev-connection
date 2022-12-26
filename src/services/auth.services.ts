export interface IAuth {
  _id?: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  mobile: string;
  active?: boolean;
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

  signIn() {}
  signUp() {}
  forgotPassword() {}
  verifyEmail() {}
}

const authService = new AuthService();
export { authService };
