import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

/**
 * User component
 * @returns
 */
const User = () => {
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
