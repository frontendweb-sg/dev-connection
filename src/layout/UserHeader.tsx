import Container from "../components/Container";
import NavbarUserControl from "../components/widget/NavbarUserControl";
import Logo from "../layout/Logo";
import Navigation from "../layout/Navigation";

/**
 * User header component
 * @returns
 */
const UserHeader = () => {
  return (
    <header className="navbar navbar-private navbar-expand-sm">
      <Container fluid>
        <Logo to="/user">DC</Logo>
        <Navigation />
        <NavbarUserControl />
      </Container>
    </header>
  );
};

export default UserHeader;
