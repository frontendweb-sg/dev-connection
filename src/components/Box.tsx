import { forwardRef } from "react";
import classNames from "classnames";
export interface IBoxProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}
export type BoxRef = HTMLDivElement;

/**
 * Box component
 * @param param0
 * @returns
 */
const Box = forwardRef<BoxRef, IBoxProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const classes = classNames(className);
  return (
    <div ref={ref} className={classes} {...rest}>
      {children}
    </div>
  );
});

export default Box;
