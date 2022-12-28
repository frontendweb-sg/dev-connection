import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * Signout
 * @returns
 */
const Signout = () => {
  const auth = useAuth();
  const { onLogout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  if (!auth.isAuth) {
    return <Navigate to={auth.redirectUrl!} />;
  }

  return <Navigate to="/auth" state={{ from: location }} />;
};

export default Signout;
