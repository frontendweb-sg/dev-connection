import { NavLink } from "react-router-dom";
import Icon from "../components/Icon";

/**
 * Navigation component
 * @returns
 */
const Navigation = () => {
  return (
    <nav className="navbar-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/user" className="nav-link">
            <Icon icon="home" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/user/posts" className="nav-link">
            <Icon icon="feed" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/user/developers" className="nav-link">
            <Icon icon="users" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/user/" className="nav-link">
            <Icon icon="image" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
