import { Navigate, Outlet, useLocation } from "react-router-dom";
import Box from "../components/Box";
import { useAddClass } from "../hooks/useAddClass";
import { useAuth } from "../hooks/useAuth";
import AdminSidebar from "../layout/AdminSidbar";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

/**
 * Admin layout component
 * @returns
 */
const Admin = () => {
  useAddClass("root-admin");

  const location = useLocation();
  const auth = useAuth();

  if (!auth.isAuth && auth.user?.role !== "admin") {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return (
    <>
      <AdminSidebar />
      <Box className="wrapper">
        <Header />
        <Box className="content-section">
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Admin;
