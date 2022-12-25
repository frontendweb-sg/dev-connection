import classNames from "classnames";
import Box from "./Box";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { createContext, FC, ReactElement, ReactNode, useContext } from "react";
import { useToggle } from "../hooks/useToggle";
import Button from "./Button";
import IconButton from "./IconButton";
import { Direction } from "../types";

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
  const classes = classNames("dropdown", className);

  return (
    <DropdownContext.Provider value={{ open, onOpen, onClose, onToggle }}>
      <Box className={classes} {...rest}>
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

const DropdownItem = () => {
  return <Box></Box>;
};

export default Object.assign(Dropdown, { DropdownButton, DropdownItem });
