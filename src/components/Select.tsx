import classNames from "classnames";
import Box from "./Box";
import PropTypes from "prop-types";
import { ReactNode } from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import Icon from "./Icon";
import Typography, { TypographyProps } from "./Typegraphy";
import { getError, isValidJson } from "../util";

type ISelectProps<T> = React.SelectHTMLAttributes<HTMLSelectElement> &
  typeof defaultProps & {
    label?: string;
    optionLabel?: string;
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

const defaultProps = {
  optionLabel: "select item",
};

/**
 * Select component
 * @param param0
 * @returns
 */
const Select = <T extends unknown>({
  label,
  errors,
  keyName,
  options,
  endIcon,
  touched,
  startIcon,
  className,
  optionLabel,
  renderProps,
  setFieldValue,
  ...rest
}: ISelectProps<T>) => {
  const error = getError(rest.name!, errors, touched); // error
  const classes = classNames(
    "form-control",
    {
      "is-valid": touched?.[rest.name as keyof typeof touched],
      "is-invalid": error,
    },
    className
  ); // class

  // handle change
  const onHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedValue = isValidJson(value) ? JSON.parse(value) : value;
    if (setFieldValue) {
      setFieldValue?.(name, updatedValue);
    } else {
      rest.onChange?.(e);
    }
  };

  const labelEl = label && (
    <Typography className="form-label" variant="label">
      {label}
    </Typography>
  );

  const optionsEl = options.map((item: any) =>
    renderProps ? (
      renderProps(item)
    ) : ["string", "number"].includes(typeof item) ? (
      <option value={item} key={item}>
        {item}
      </option>
    ) : (
      <option key={item._id} value={JSON.stringify(item)}>
        {keyName ? item[keyName] : item?.title}
      </option>
    )
  );

  return (
    <Box className="mb-3">
      {labelEl}
      <Box className={classes}>
        {startIcon && <Icon icon={startIcon} />}
        <select onChange={onHandleChange} {...rest}>
          {optionLabel && <option disabled>{optionLabel}</option>}
          {optionsEl}
        </select>
        {endIcon && <Icon icon={endIcon} />}
      </Box>
      {error && <span className="invalid-feedback">{error}</span>}
    </Box>
  );
};

Select.defaultProps = defaultProps;
export default Select;
