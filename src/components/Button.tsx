import classNames from "classnames";
import { FC } from "react";
import { Color, Size } from "../types";
import type { IconName } from "@fortawesome/fontawesome-svg-core";
import Icon from "./Icon";
//import type { IconName as BrandIcon } from '@fortawesome/free-brands-svg-icons';

type ButtonVariant = "text" | "filled" | "outline";
export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  custom?: boolean;
  color?: Color;
  size?: Size;
  startIcon?: IconName;
  endIcon?: IconName;
  loading?: boolean;
  block?: boolean;
}

/**
 * Button component
 * @param param0
 * @returns
 */
const Button: FC<IButtonProps> = ({
  variant,
  children,
  color,
  size,
  className,
  custom,
  startIcon,
  endIcon,
  loading,
  disabled,
  block,
  type,
  ...rest
}) => {
  let classes = classNames(
    {
      btn: true,
      "w-100": block,
      ["btn-" + color]: color,
      ["btn-" + size]: size,
    },
    block ? "btn-block" : null,
    className
  );

  if (variant === "text") {
    classes = classNames(
      "btn",
      { ["btn-text-" + color]: color, ["btn-" + size]: size },
      className
    );
  }

  if (variant === "outline") {
    classes = classNames(
      "btn",
      { ["btn-outline-" + color]: color, ["btn-" + size]: size },
      className
    );
  }

  if (custom)
    classes = classNames(
      { ["btn-" + color]: color, ["btn-" + size]: size },
      className
    );

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <Icon icon="spinner" spin className="me-2" /> : null}
      {startIcon && !loading ? (
        <Icon icon={startIcon} className="me-2" />
      ) : null}
      {children}
      {endIcon && !loading ? <Icon icon={endIcon} className="ms-2" /> : null}
    </button>
  );
};

Button.defaultProps = {
  color: "primary",
  size: "md",
  variant: "filled",
  type: "button",
};

export default Button;
