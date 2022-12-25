import classNames from "classnames";
import { FC, ReactElement, ReactNode } from "react";
import { Link, NavLink, LinkProps } from "react-router-dom";

type INavType = "menu" | "link" | "dropdown";
interface INavLinkProps extends LinkProps {
  type?: INavType;
  children: ReactElement | ReactNode;
}

const NavMenu: FC<INavLinkProps> = ({
  to,
  type,
  children,
  className,
  ...rest
}) => {
  switch (type) {
    case "dropdown":
      return (
        <Link to={to} className={classNames("dropdown-item", className)}>
          {children}
        </Link>
      );
    case "menu":
      return (
        <li className="nav-item">
          <NavLink
            to={to}
            className={classNames("nav-link", className)}
            {...rest}
          >
            {children}
          </NavLink>
        </li>
      );
    case "link":
      return (
        <Link className={className} to={to} {...rest}>
          {children}
        </Link>
      );
    default:
      return (
        <NavLink to={to} className={classNames("nav-link")} {...rest}>
          {children}
        </NavLink>
      );
  }
};

export default NavMenu;
