import Button from "../components/Button";
import IconButton from "../components/IconButton";
import { useToggle } from "../hooks/useToggle";
import Box from "../components/Box";
import classNames from "classnames";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";
import {
  DropdownContext,
  dropdownDefaultProps,
  IDropdownBodyProps,
  IDropdownButtonProps,
  IDropdownItemProps,
  IDropdownProps,
} from "../context/Dropdown";
import { useContext, useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

/**
 * Dropdown component
 * @param props
 * @returns
 */
const Dropdown = (props: IDropdownProps) => {
  const { children, icon, title, direction, component, className, ...rest } =
    props;
  const { open, onClose, onOpen, onToggle } = useToggle();
  const dropRef = useRef<HTMLDivElement>(null);
  const classes = classNames("dropdown", className);

  useClickOutside(dropRef, onClose);
  const state = {
    open,
    onOpen,
    onClose,
    onToggle,
  };

  return (
    <DropdownContext.Provider value={state}>
      <Box ref={dropRef!} className={classes} {...rest}>
        <DropdownButton icon={icon} title={title} component={component} />
        <DropdownBody direction={direction}>{children}</DropdownBody>
      </Box>
    </DropdownContext.Provider>
  );
};

Dropdown.defaultProps = dropdownDefaultProps;

const DropdownBody = (props: IDropdownBodyProps) => {
  const { children, className, direction, ...rest } = props;
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

/**
 * React dropdown button
 * @param props
 * @returns
 */
const DropdownButton = (props: IDropdownButtonProps) => {
  const { title, component, icon, ...rest } = props;
  const { onToggle } = useContext(DropdownContext);
  if (title) {
    return (
      <Button onClick={onToggle} {...rest}>
        {title}
      </Button>
    );
  }
  if (component) return component;
  return (
    <IconButton onClick={onToggle} icon={icon ?? "ellipsis-h"} {...rest} />
  );
};

const DropdownItem = (props: IDropdownItemProps) => {
  const { onClick, to, icon, className, children, ...rest } = props;
  const classes = classNames("dropdown-item", className);
  if (to) {
    return (
      <Link to={to!} className={classes} {...rest}>
        {icon && <Icon icon={icon} />} {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <Button onClick={onClick!} className={classes}>
        {icon && <Icon icon={icon} />} {children}
      </Button>
    );
  }

  return (
    <Box className={classes}>
      {icon && <Icon icon={icon} />}
      {children}
    </Box>
  );
};

export default Object.assign(Dropdown, {
  Body: DropdownBody,
  Button: DropdownButton,
  Item: DropdownItem,
});
