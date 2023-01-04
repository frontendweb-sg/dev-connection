import { FC } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Icon from "../components/Icon";
import NavbarUserControl from "../components/widget/NavbarUserControl";
import Logo from "./Logo";
import Navigation from "./Navigation";

type IHeader = "public" | "private" | "admin" | "auth";
interface IHeaderProps extends React.HTMLAttributes<HTMLElement> {
  type?: IHeader;
}

const Header: FC<IHeaderProps> = ({ type }) => {
  switch (type) {
    case "auth":
      return <AuthHeader />;
    case "admin":
      return <AdminHeader />;
    case "private":
      return <PrivateHeader />;
    default:
      return <header></header>;
  }
};

const AuthHeader = () => {
  return (
    <header className="navbar navbar-auth fixed-top">
      <Container>
        <Logo className="text-light" to="/">
          DC
        </Logo>
        <div className="navbar-auth-right">
          <Link to="/">
            <Icon icon="home" />
          </Link>
        </div>
      </Container>
    </header>
  );
};

const AdminHeader = () => {
  return <header className="navbar navbar-admin"></header>;
};

const PrivateHeader = () => {
  return (
    <header className="navbar navbar-private navbar-expand-sm">
      <Container fluid>
        <Logo to="/user">DC</Logo>
        <Navigation />
        <NavbarUserControl></NavbarUserControl>
      </Container>
    </header>
  );
};

Header.defaultProps = {
  type: "auth",
};

export default Header;
