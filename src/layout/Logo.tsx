import classNames from "classnames";
import LogoIcon from "./logo.svg";
import { FC } from "react";
import { Link, To } from "react-router-dom";
interface ILogoProps extends React.HTMLAttributes<HTMLLinkElement> {
  to?: To;
}
/**
 * Logo component
 * @param param0
 * @returns
 */
const Logo: FC<ILogoProps> = ({ to, children, className, ...rest }) => {
  const classes = classNames("navbar-brand", className);
  return (
    <Link to={to!} className={classes}>
      <img src={LogoIcon} width="40" alt="DC" /> {children}
    </Link>
  );
};

Logo.defaultProps = {
  children: "DC",
  to: "/",
};

export default Logo;
