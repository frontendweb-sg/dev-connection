import { FC, createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Color } from "../types";

type ITag =
  | HTMLDivElement
  | HTMLLabelElement
  | HTMLSpanElement
  | HTMLHeadingElement
  | HTMLParagraphElement;

type IVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "label"
  | "span";

export interface ITypographyProps extends React.HTMLAttributes<ITag> {
  variant?: IVariant;
  color?: Color;
}

/**
 * Typography component
 * @param variant
 * @returns
 */
const Typography: FC<ITypographyProps> = ({
  variant,
  className,
  children,
  color,
  ...rest
}) => {
  const _h6 = variant === "subtitle1" || variant === "subtitle2" ? "h6" : null;
  const _p = variant === "body1" || variant === "body2" ? "p" : null;
  const _caption = variant === "caption" ? "small" : null;
  const tag = _h6 || _p || _caption || variant;
  const classes = classNames(
    "text-" + variant,
    { ["text-" + color]: color },
    className
  );
  return createElement(tag!, { className: classes, ...rest }, children);
};

Typography.defaultProps = {
  variant: "h1",
  color: "primary",
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "label",
    "span",
  ]),
};
export default Typography;
