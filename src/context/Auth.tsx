import { useReducer, createContext, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hook";
import {
  authService,
  IAuthLogin,
  IAuthResult,
  IAuthSignup,
  IUser,
} from "../services/auth.services";
import { alertShow } from "../store/reducers/alert.reducer";
import { RootProps } from "../types";

interface IAuthState {
  user: IUser | null;
  token: string | null;
  loading: boolean;
  isAdmin?: boolean;
  isAuth?: boolean;
  redirectUrl?: string;
  error?: string | null;
}

type ACTIONTYPE =
  | { type: "AUTH_LOADING"; payload: boolean }
  | { type: "AUTH_SUCCESS"; payload: IAuthResult }
  | { type: "AUTH_LOGOUT"; payload: null }
  | { type: "AUTH_REDIRECT"; payload: string };

const initialState = {
  user: null,
  token: null,
  error: null,
  loading: false,
  isAdmin: false,
  isAuth: false,
  redirectUrl: "/",
};

interface IAuthContext extends IAuthState {
  onSignin: (body: IAuthLogin) => void;
  // onSignup: (body: IAuthSignup) => void;
  checkUserIsLoggedIn: () => void;
}

let timer: ReturnType<typeof setTimeout>; // timer

// Auth context
const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const useAuth = () => useContext(AuthContext);

// Auth provider
const AuthProvider = ({ children }: RootProps) => {
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSignin = async (body: IAuthLogin) => {
    try {
      const { data } = await authService.signIn(body);
      const expireDate = new Date(data.expireTime);
      localStorage.setItem(
        "user",
        JSON.stringify({ data: data.data, token: data.token })
      );
      localStorage.setItem("expireDate", JSON.stringify(expireDate));
      dispatch({ type: "AUTH_SUCCESS", payload: data });

      if (data.data.role === "admin") {
        dispatch({ type: "AUTH_REDIRECT", payload: "/admin" });
      } else {
        dispatch({ type: "AUTH_REDIRECT", payload: "/user" });
      }

      autoLogout(+data.expireTime);
      checkUserIsLoggedIn();

      // navigate
      navigate(data.data.role === "admin" ? "/admin" : "/user", {
        replace: true,
      });
    } catch (error) {
      if (error instanceof Error) {
        appDispatch(alertShow({ message: error.message, color: "danger" }));
      }
    }
  };

  // signout
  const onSignout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("expireDate");
    dispatch({ type: "AUTH_LOGOUT", payload: null });
    if (timer) {
      clearTimeout(timer);
    }
  };

  const autoLogout = useCallback((time: number) => {
    timer = setTimeout(onSignout, time);
  }, []);

  // Checked user is logged in
  const checkUserIsLoggedIn = useCallback(() => {
    const user = JSON.parse(localStorage.user as string);
    const expireDate = new Date(JSON.parse(localStorage.expireDate));

    if (!user || expireDate < new Date()) {
      onSignout();
    } else {
      dispatch({ type: "AUTH_SUCCESS", payload: user });
      const time = expireDate.getTime() - new Date().getTime();
      if (time > 0) {
        autoLogout(time);
      }
    }
  }, [autoLogout]);

  return (
    <AuthContext.Provider value={{ ...state, onSignin, checkUserIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth };
export default AuthProvider;

// Auth Reducer
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
    case "AUTH_REDIRECT":
      return {
        ...state,
        redirectUrl: payload,
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
      return state;
  }
}
