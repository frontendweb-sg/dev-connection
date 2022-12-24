import Avatar from "../Avatar";
import Icon from "../Icon";
import Typography from "../Typegraphy";

/**
 * Navbar user control
 * @returns
 */
const NavbarUserControl = () => {
  return (
    <div className="d-flex align-items-center navbar-control ms-auto">
      <Avatar size="sm" />
      <Typography className="ms-2 mb-0" variant="subtitle2">
        Pradeep <Icon className="ms-2" icon="caret-down" />
      </Typography>
    </div>
  );
};

export default NavbarUserControl;
