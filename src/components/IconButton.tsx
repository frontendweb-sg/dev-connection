import { IconName } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { FC } from "react";
import { Color, Size } from "../types";
import Icon from "./Icon";

interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  size?: Size;
  icon?: IconName;
}

/**
 * Icon Button
 * @param param0
 * @returns
 */
const IconButton: FC<IIconButtonProps> = ({
  color,
  size,
  icon,
  children,
  className,
  ...rest
}) => {
  const classes = classNames("btn btn-icon", className);
  return (
    <button className={classes} {...rest}>
      <Icon icon={icon!} />
    </button>
  );
};

export default IconButton;
