import classNames from "classnames";
import Box from "./Box";
import PropTypes from "prop-types";
import { ReactNode } from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import Icon from "./Icon";
import Typography, { TypographyProps } from "./Typegraphy";
import { getError } from "../util";

type ISelectProps<T> = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: T[];
  startIcon?: IconName;
  endIcon?: IconName;
  keyName?: string;
  errors?: object;
  touched?: object;
  renderProps?: (item: T) => ReactNode;
  setFieldValue?: (name: string, value: string | number | object) => void;
  typographyProps?: TypographyProps;
};

/**
 * Select component
 * @param param0
 * @returns
 */
const Select = <T extends unknown>({
  label,
  keyName,
  options,
  startIcon,
  endIcon,
  className,
  errors,
  touched,
  renderProps,
  setFieldValue,
  ...rest
}: ISelectProps<T>) => {
  // handle change
  const onHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    const updatedValue = ["string", "number"].includes(typeof value)
      ? value
      : JSON.parse(value);

    if (setFieldValue) {
      setFieldValue?.(name, updatedValue);
    } else {
      rest.onChange?.(e);
    }
  };

  const error = getError(rest.name!, errors, touched);
  const classes = classNames(
    "form-control",
    {
      "is-valid": touched?.[rest.name as keyof typeof touched],
      "is-invalid": error,
    },
    className
  );

  return (
    <Box className="mb-3">
      {label && (
        <Typography className="form-label" variant="label">
          {label}{" "}
        </Typography>
      )}
      <Box className={classes}>
        {startIcon && <Icon icon={startIcon} />}
        <select onChange={onHandleChange} {...rest}>
          <option disabled>-- Select --</option>
          {options.map((item: any) =>
            renderProps ? (
              renderProps(item)
            ) : ["string", "number"].includes(typeof item) ? (
              <option value={item} key={item}>
                {item}
              </option>
            ) : (
              <option key={item._id} value={JSON.stringify(item)} id={item._id}>
                {keyName ? item[keyName] : item?.title}
              </option>
            )
          )}
        </select>
        {endIcon && <Icon icon={endIcon} />}
      </Box>
      {error && <span className="invalid-feedback">{error}</span>}
    </Box>
  );
};

export default Select;
