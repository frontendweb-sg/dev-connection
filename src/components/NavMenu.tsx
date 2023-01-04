import { IconName } from "@fortawesome/fontawesome-common-types";
import classNames from "classnames";
import { FC, ReactElement, ReactNode } from "react";
import { Link, NavLink, LinkProps, NavLinkProps } from "react-router-dom";
import Icon from "./Icon";

type INavType = "menu" | "link" | "dropdown";
interface INavLinkProps extends LinkProps {
  type?: INavType;
  children: ReactElement | ReactNode;
  icon?: IconName;
}

const NavMenu: FC<INavLinkProps> = ({
  to,
  type,
  children,
  className,
  icon,
  ...rest
}) => {
  const clsName = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active nav-link" : "nav-link";
  switch (type) {
    case "menu":
      return (
        <li className="nav-item">
          <NavLink to={to} className={clsName} {...rest}>
            {icon && <Icon icon={icon} className="me-2" />} {children}
          </NavLink>
        </li>
      );
    case "link":
      return (
        <Link className={className} to={to} {...rest}>
          {icon && <Icon icon={icon} />} {children}
        </Link>
      );
    default:
      return (
        <NavLink to={to} className={classNames("nav-link")} {...rest}>
          {icon && <Icon icon={icon} />} {children}
        </NavLink>
      );
  }
};

export default NavMenu;
