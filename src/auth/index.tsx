import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import { useAuth } from "../context/Auth";
import { useAddClass } from "../hooks/useAddClass";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

/**
 * Auth component
 * @returns
 */
const Auth = () => {
  useAddClass("root-auth");
  const nav = useNavigate();
  const { redirectUrl, isAuth, isAdmin, user } = useAuth();

  // if (isAuth && !isAdmin && !user?.verify) {
  //   return <Navigate to="/auth/verify-email" />;
  // }

  if (isAuth && isAdmin) {
    return <Navigate to="/admin" />;
  }

  if (isAuth && !isAdmin) {
    return <Navigate to="/user" />;
  }

  return (
    <>
      <Header />
      <Container className="d-flex flex-column" fluid>
        <Row className="d-flex flex-fill h-100">
          <Col className="bg-primary d-flex align-items-center justify-content-center">
            <img
              className="img-responsive"
              width="450"
              src="social.png"
              alt=""
            />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer variant="absolute" />
    </>
  );
};

export default Auth;
