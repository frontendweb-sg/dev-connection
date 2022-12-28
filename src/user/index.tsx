import { Navigate, Outlet, useLocation } from "react-router-dom";
import Container from "../components/Container";
import { useAuth } from "../hooks/useAuth";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Role } from "../util/enums";

/**
 * User component
 * @returns
 */
const Roles: string[] = [Role.admin, Role.user];

const User = () => {
  const location = useLocation();
  const auth = useAuth();

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
      <Header type="private" />
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
