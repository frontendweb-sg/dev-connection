import { Outlet } from "react-router-dom";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import { useAddClass } from "../hooks/useAddClass";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

/**
 * Auth component
 * @returns
 */
const Auth = () => {
  useAddClass("root-auth");
  return (
    <>
      <Header />
      <Container className="d-flex flex-column" fluid>
        <Row className="d-flex flex-fill h-100">
          <Col className="bg-light d-flex align-items-center justify-content-center">
            <img
              className="img-responsive"
              width="700"
              src="social.png"
              alt=""
            />
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer variant="absolute" />
    </>
  );
};

export default Auth;
