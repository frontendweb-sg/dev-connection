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
          <NavLink to="/user/friends" className="nav-link">
            <Icon icon="users" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/user/photos" className="nav-link">
            <Icon icon="image" />
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/user/git-profile" className="nav-link">
            Git
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
