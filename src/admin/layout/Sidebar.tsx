import { IconName } from "@fortawesome/fontawesome-common-types";
import Box from "../../components/Box";
import NavMenu from "../../components/NavMenu";
import Logo from "../../layout/Logo";
import { SIDEBAR_MENU } from "./menu";

/**
 * Sidebar component
 * @returns
 */
const Sidebar = () => {
  return (
    <aside className="sidebar sidebar-admin">
      <Logo to="/admin">DC</Logo>
      <Box className="sidebar-nav">
        <ul className="nav navbar-nav">
          <li className="nav-header">
            <span>Menu</span>
          </li>
          {SIDEBAR_MENU.map((menu, index) => (
            <NavMenu
              icon={menu.icon! as IconName}
              type="menu"
              to={menu.href}
              key={index}
            >
              {menu.label}
            </NavMenu>
          ))}

          <li className="nav-header">
            <span>Settings</span>
          </li>
        </ul>
      </Box>
    </aside>
  );
};

export default Sidebar;
