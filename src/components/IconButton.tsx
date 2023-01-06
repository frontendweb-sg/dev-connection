import { IconName } from "@fortawesome/free-solid-svg-icons";
import { Color, Size } from "../types";
import classNames from "classnames";
import Icon from "./Icon";
import PropTypes from "prop-types";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: Color;
  size?: Size;
  icon?: IconName;
} & typeof defaultProps;

const defaultProps = {
  type: "button",
};
/**
 * Icon Button
 * @param param0
 * @returns
 */
const IconButton = ({
  color,
  size,
  icon,
  children,
  className,
  type,
  ...rest
}: IconButtonProps) => {
  const classes = classNames("btn btn-icon", className);
  return (
    <button type={type} className={classes} {...rest}>
      <Icon icon={icon!} />
    </button>
  );
};

IconButton.defaultProps = defaultProps;
IconButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
};
export default IconButton;
