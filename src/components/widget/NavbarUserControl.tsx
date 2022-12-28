import { useContext } from "react";
import { DropdownContext } from "../../context/Dropdown";
import { useAuth } from "../../hooks/useAuth";
import Avatar from "../Avatar";
import Box from "../Box";
import Divider from "../Divider";
import Dropdown from "../Dropdown";
import Typography from "../Typegraphy";

/**
 * Navbar user control
 * @returns
 */

const NavbarUser = () => {
  const { onToggle } = useContext(DropdownContext);
  const { user } = useAuth();
  return (
    <Box
      className="d-flex align-items-center dropdown-toggle"
      onClick={onToggle}
    >
      <Avatar size="sm" />
      <Typography className="ms-2 mb-0" variant="subtitle2">
        {user?.firstname}
      </Typography>
    </Box>
  );
};

const NavbarUserControl = () => {
  return (
    <div className="navbar-control ms-auto">
      <Dropdown component={<NavbarUser />}>
        <Dropdown.Item icon="user">Profile</Dropdown.Item>
        <Dropdown.Item icon="cog">Settings</Dropdown.Item>
        <Divider />
        <Dropdown.Item icon="sign-out">Signout</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default NavbarUserControl;
