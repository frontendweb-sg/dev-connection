import classNames from "classnames";
import { ReactNode } from "react";

type ISelectProps<T> = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: T[];
  keyName?: string;
  renderProps?: (item: T) => ReactNode;
};

const Select = <T extends unknown>({
  keyName,
  name,
  value,
  options,
  className,
  renderProps,
  ...rest
}: ISelectProps<T>) => {
  const classes = classNames("form-control", className);

  return (
    <select name={name} value={value} className={classes} {...rest}>
      {options.map((item: any) =>
        renderProps ? (
          renderProps(item)
        ) : (
          <option key={item._id} id={item?._id}>
            {keyName ? item[keyName] : item?.title}
          </option>
        )
      )}
    </select>
  );
};

export default Select;
