import { FC } from "react";
import classNames from "classnames";

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

/**
 * Row component
 * @param param0
 * @returns
 */
const Row: FC<IProps> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames("row", className)} {...rest}>
      {children}
    </div>
  );
};

export default Row;
