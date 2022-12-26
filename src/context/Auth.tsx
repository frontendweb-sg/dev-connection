import { createContext, useContext, useReducer, useState } from "react";
import { IAuth } from "../services/auth.services";

interface IAuthState {
  loading: false;
  user: IAuth | null;
  isAuth: Boolean;
  isAdmin: Boolean;
  token: string;
  redirected?: string;
}

interface IAuthContext {
  auth: IAuthProps;
  onSignin?: () => void;
  onSignup?: () => void;
  onLogout?: () => void;
}

const AuthContext = createContext<IAuthContext>({
  auth: {
    loading: false,
    token: "",
    user: null,
    isAdmin: false,
    isAuth: false,
  },
});

const useAuth = () => useContext(AuthContext);
const AuthProvider = () => {
  const [state, setAuth] = useReducer<IAuthProps>(
    {
      user: null,
      isAdmin: false,
      isAuth: false,
      redirected: "/",
      token: "",
      loading: false,
    },
    authReducer
  );

  const onSignIn = () => {};
  const onSignUp = () => {};
  const onSignout = () => {};

  return (
    <AuthContext.Provider
      value={{
        auth: state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const authReducer = (
  state,
  action: { type: string; payload: IAuth | null | string | boolean }
) => {
  const { type, payload } = action;
  switch (type) {
    case "signin":
      return {};
    case "signup":
      return {};
    case "logout":
      return {};
    default:
      return state;
  }
};
export { useAuth, type IAuthProps };
export default AuthProvider;
