import classNames from "classnames";
import { FC } from "react";

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
  cover?: boolean;
}

/**
 * Container component
 * @param param0
 * @returns
 */
const Container: FC<IProps> = ({
  cover,
  children,
  fluid,
  className,
  ...rest
}) => {
  const classes = classNames(
    fluid ? "container-fluid" : "container",
    className
  );
  console.log(rest);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Container;
