import { Outlet, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  useAddClass("root-auth");
  const { isAdmin, isAuth, user, token } = useAuth();

  console.log(isAdmin, isAuth, token, user);
  // if (isAuth && !isAdmin && !user?.verify) {
  //   navigate("/auth/verify-email");
  // }

  // if (isAuth && isAdmin) {
  //   navigate("/admin");
  // }

  // if (isAuth && !isAdmin) {
  //   navigate("/user");
  // }

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
