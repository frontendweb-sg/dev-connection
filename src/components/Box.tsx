import { FC, forwardRef } from "react";
import classNames from "classnames";
interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}
export type BoxRef = HTMLDivElement;

/**
 * Box component
 * @param param0
 * @returns
 */
const Box: FC<IProps> = forwardRef<BoxRef, IProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const classes = classNames(className);
  return (
    <div ref={ref} className={classes} {...rest}>
      {children}
    </div>
  );
});

export default Box;
