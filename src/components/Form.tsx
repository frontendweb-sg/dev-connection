import { FC } from "react";
import classNames from "classnames";

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {}

/**
 * Form component
 * @param param0
 * @returns
 */
const Form: FC<IProps> = ({ children, className, ...rest }) => {
  const classes = classNames("needs-validation", className);
  return (
    <form className={classes} noValidate {...rest}>
      {children}
    </form>
  );
};

export default Form;
