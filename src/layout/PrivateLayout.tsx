import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const PrivateLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PrivateLayout;
