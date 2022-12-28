import { Navigate, Outlet, useLocation } from "react-router-dom";
import Container from "../components/Container";
import { useAddClass } from "../hooks/useAddClass";
import { useAuth } from "../hooks/useAuth";
import Footer from "../layout/Footer";
import UserHeader from "../layout/UserHeader";
import { Role } from "../util/enums";

/**
 * User component
 * @returns
 */
const Roles: string[] = [Role.admin, Role.user];

const User = () => {
  const location = useLocation();
  const auth = useAuth();

  useAddClass("root-user");

  if (!auth.isAuth) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  if (!auth.isAuth && !auth.user?.verify) {
    return (
      <Navigate to="/auth/verify-email" state={{ from: location }} replace />
    );
  }

  if (!auth.isAuth && Roles.includes(auth.user?.role!)) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return (
    <>
      <UserHeader />
      <main className="mt-3 mb-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default User;
