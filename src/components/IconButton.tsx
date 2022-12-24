import { IconName } from "@fortawesome/free-solid-svg-icons";
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
  ...rest
}) => {
  return (
    <button {...rest}>
      <Icon icon={icon!} className="ms-2" />
      {children}
    </button>
  );
};

export default IconButton;
