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
    placeholder?: string;
    options: T[];
    startIcon?: IconName;
    endIcon?: IconName;
    errors?: object;
    touched?: object;
    getOptionLabel?: (item: T) => ReactNode;
    setFieldValue?: (name: string, value: string | number | object) => void;
    typographyProps?: TypographyProps;
  };

const defaultProps = {
  placeholder: "Select item",
};

/**
 * Select component
 * @param param0
 * @returns
 */
const Select = <T extends unknown>({
  label,
  errors,
  options,
  endIcon,
  touched,
  startIcon,
  className,
  placeholder,
  getOptionLabel,
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

  const optionsEl = options.map((item: any, index: number) =>
    ["string", "number"].includes(typeof item) ? (
      <option value={item} key={item + "-option-" + index}>
        {getOptionLabel ? getOptionLabel(item) : item}
      </option>
    ) : (
      <option
        key={"option-" + JSON.stringify(item)}
        value={JSON.stringify(item)}
      >
        {getOptionLabel ? getOptionLabel(item) : item?.label}
      </option>
    )
  );

  return (
    <Box className="mb-3">
      {labelEl}
      <Box className={classes}>
        {startIcon && <Icon icon={startIcon} />}
        <select onChange={onHandleChange} {...rest}>
          <option value="">{placeholder}</option>
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
