import classNames from "classnames";
import { FC, ReactElement, ReactNode } from "react";
import { Link, NavLink, LinkProps } from "react-router-dom";

type INavType = "menu" | "link";
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
    case "menu":
      return (
        <NavLink to={to} className={classNames("nav-link")} {...rest}>
          {children}
        </NavLink>
      );
    case "link":
      return (
        <Link to={to} {...rest}>
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
