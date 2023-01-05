import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAddClass } from "../hooks/useAddClass";
import { useAuth } from "../hooks/useAuth";
import { useToggle } from "../hooks/useToggle";
import Box from "../components/Box";
import Footer from "../layout/Footer";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

/**
 * Admin layout component
 * @returns
 */
const Admin = () => {
  const { onToggle } = useToggle();
  useAddClass("root-admin");

  const location = useLocation();
  const auth = useAuth();

  if (!auth.isAuth && auth.user?.role !== "admin") {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return (
    <>
      <Sidebar />
      <Box className="wrapper">
        <Header onToggle={onToggle} />
        <Box className="content-section">
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Admin;
