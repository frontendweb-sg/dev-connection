import { FC } from "react";
import classNames from "classnames";
export interface IBoxProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

/**
 * Box component
 * @param param0
 * @returns
 */
const Box: FC<IBoxProps> = ({ children, className, ...rest }) => {
  const classes = classNames(className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Box;
