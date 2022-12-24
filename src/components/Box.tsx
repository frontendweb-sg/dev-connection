import { FC } from "react";
import classNames from "classnames";
interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

/**
 * Box component
 * @param param0
 * @returns
 */
const Box: FC<IProps> = ({ children, className, ...rest }) => {
  const classes = classNames(className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Box;
