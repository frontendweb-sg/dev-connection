import classNames from "classnames";
import Box from "./Box";
import Button from "./Button";
import IconButton from "./IconButton";
import Icon from "./Icon";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import React, {
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useRef,
} from "react";
import { useToggle } from "../hooks/useToggle";
import { Direction } from "../types";
import { Link, To } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";

interface IDropdownContext {
  open: Boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onToggle?: () => void;
}

const DropdownContext = createContext<IDropdownContext>({ open: false });
interface IDropdownProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  dropdownBodyProps?: IDropdownBodyProps;
  icon?: IconName;
  component?: ReactElement | ReactNode | Function;
  btnProps?: IDropdownButtonProps;
}

/**
 * Dropdown component
 * @returns
 */

const Dropdown: FC<IDropdownProps> = ({
  dropdownBodyProps,
  btnProps,
  className,
  children,
  icon,
  component,
  ...rest
}) => {
  const { open, onClose, onOpen, onToggle } = useToggle();
  const dropRef = useRef<HTMLDivElement>(null);
  const classes = classNames("dropdown", className);

  // close dropdown when click outside
  useClickOutside(dropRef, onClose);
  return (
    <DropdownContext.Provider value={{ open, onOpen, onClose, onToggle }}>
      <Box ref={dropRef!} className={classes} {...rest}>
        <DropdownButton {...btnProps} />
        <DropdownBody {...dropdownBodyProps}>{children}</DropdownBody>
      </Box>
    </DropdownContext.Provider>
  );
};

interface IDropdownBodyProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  direction?: Direction;
}
/**
 * Dropdown menu
 * @param param0
 * @returns
 */
const DropdownBody: FC<IDropdownBodyProps> = ({
  children,
  className,
  direction,
  ...rest
}) => {
  const { open } = useContext(DropdownContext);
  const classes = classNames(
    "dropdown-menu",
    direction && "dropdown-menu-" + direction,
    open && "show",
    className
  );
  return (
    <Box className={classes} {...rest}>
      {children}
    </Box>
  );
};

interface IDropdownButtonProps {
  icon?: IconName;
  label?: string;
}
const DropdownButton: FC<IDropdownButtonProps> = ({ icon, label, ...rest }) => {
  const { onToggle } = useContext(DropdownContext);
  return label ? (
    <Button onClick={onToggle} {...rest}>
      {label}
    </Button>
  ) : (
    <IconButton onClick={onToggle} icon={icon ?? "ellipsis-h"} {...rest} />
  );
};

interface IDropdonwItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLLIElement> {
  link?: boolean;
  to?: To;
  icon?: IconName;
}
/**
 * Dropdown item
 * @param param0
 * @returns
 */
const DropdownItem: FC<IDropdonwItemProps> = ({
  link,
  to,
  children,
  className,
  icon,
  ...rest
}) => {
  const classes = classNames("dropdown-item", className);
  return link ? (
    <Link to={to!} className={classes} {...rest}>
      {icon && <Icon icon={icon} />} {children}
    </Link>
  ) : (
    <Box className={classes}>
      {icon && <Icon icon={icon} />}
      {children}
    </Box>
  );
};

export default Object.assign(Dropdown, { DropdownButton, Item: DropdownItem });
