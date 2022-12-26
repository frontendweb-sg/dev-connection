import { useReducer, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hook";
import {
  authService,
  IAuthLogin,
  IAuthResult,
  IUser,
} from "../services/auth.services";
import { alertShow } from "../store/reducers/alert.reducer";
import { RootProps } from "../types";

interface IAuthState {
  user: IUser | null;
  token: string | null;
  loading: boolean;
  isAdmin: boolean;
  isAuth: boolean;
  redirectUrl: string;
}

type ACTIONTYPE =
  | { type: "AUTH_LOADING"; payload: boolean }
  | { type: "AUTH_SUCCESS"; payload: IAuthResult }
  | { type: "AUTH_LOGOUT"; payload: null };

const initialState = {
  user: null,
  loading: false,
  isAdmin: false,
  isAuth: false,
  token: null,
  redirectUrl: "/",
};

interface IAuthContext extends IAuthState {
  onSignin: (body: IAuthLogin) => void;
  checkUserIsLoggedIn?: () => void;
}

const AuthContext = createContext<IAuthContext>({
  ...initialState,
  onSignin: () => {},
});

function reducer(state: IAuthState, action: ACTIONTYPE) {
  const { type, payload } = action;
  switch (type) {
    case "AUTH_LOADING":
      return { ...state, loading: payload };
    case "AUTH_SUCCESS":
      return {
        ...state,
        user: payload.data,
        token: payload.token,
        isAdmin: payload.data?.role === "admin",
        isAuth: payload.token !== null,
      };
    case "AUTH_LOGOUT":
      return {
        ...state,
        isAuth: false,
        isAdmin: false,
        user: null,
        token: null,
      };
    default:
      throw new Error();
  }
}

const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }: RootProps) => {
  const navigation = useNavigate();
  const appDispatch = useAppDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  /**
   * Sign in method
   * @param body
   */
  const onSignin = async (body: IAuthLogin) => {
    try {
      const { data } = await authService.signIn(body);
      localStorage.setItem("user", JSON.stringify(data.data));
      localStorage.setItem("expireTime", JSON.stringify(data.expireTime));
      dispatch({ type: "AUTH_SUCCESS", payload: data });
      navigation("/user");
    } catch (error) {
      if (error instanceof Error) {
        appDispatch(alertShow({ message: error.message, color: "danger" }));
      }
    }
  };

  // sign in
  const onSignup = () => {};

  // signout
  const onSignout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("expireTime");
    dispatch({ type: "AUTH_LOGOUT", payload: null });
    navigation("/auth");
  };

  // Checked user is logged in
  const checkUserIsLoggedIn = () => {
    const user = JSON.parse(localStorage.user);
    const expireTime = new Date(JSON.parse(localStorage.expireTime));
    console.log("user", user);
    if (user && new Date() < expireTime) {
      dispatch({ type: "AUTH_SUCCESS", payload: user });
    } else {
      onSignout();
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, onSignin, checkUserIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth };
export default AuthProvider;
