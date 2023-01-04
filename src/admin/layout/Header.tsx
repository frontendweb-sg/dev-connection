import Container from "../../components/Container";
import IconButton from "../../components/IconButton";
import NavbarUserControl from "../../components/widget/NavbarUserControl";
import { RootProps } from "../../types";

/**
 * Header component
 * @returns
 */
type Props = RootProps & { onToggle: () => void };
const Header = ({ onToggle }: Props) => {
  return (
    <header className="navbar navbar-private navbar-expand-lg">
      <Container fluid>
        <IconButton onClick={onToggle} icon="bars" />
        <NavbarUserControl />
      </Container>
    </header>
  );
};

export default Header;
