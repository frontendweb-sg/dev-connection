import { FC } from "react";
import classNames from "classnames";

interface IHrProps extends React.HtmlHTMLAttributes<HTMLHRElement> {}
/**
 * Divider component
 * @param param className
 * @returns
 */
const Divider: FC<IHrProps> = ({ className, ...rest }) => {
  return <hr className={classNames("dropdown-divider", className)} {...rest} />;
};

export default Divider;
