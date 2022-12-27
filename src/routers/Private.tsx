import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { RootProps } from "../types";

/**
 * Private route
 * @returns
 */
type IPrivateProps = RootProps & {
  isAuth?: boolean;
  isAdmin?: boolean;
  redirectedUrl?: string;
} & typeof defaultProps;

const defaultProps = {
  isAuth: false,
  isAdmin: false,
  redirectedUrl: "/auth",
};

/**
 * Private route
 * @param param0
 * @returns
 */
const Private = ({ children }: IPrivateProps) => {
  const location = useLocation();

  const auth = JSON.parse(localStorage.getItem("user") as string);
  
  if (auth?.token) {
    return children ? <>{children}</> : <Outlet />;
  }

  return <Navigate to={"/auth"} state={{ from: location }} replace />;
};

Private.defaultProps = defaultProps;
export default Private;
