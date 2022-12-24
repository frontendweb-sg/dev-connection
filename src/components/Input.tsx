import { FC } from "react";
import Box from "./Box";
import PropTypes from "prop-types";
import Typography, { ITypographyProps } from "./Typegraphy";
import classNames from "classnames";
import { getError } from "../util";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelProps?: ITypographyProps;
  startIcon?: IconName;
  endIcon?: IconName;
  errors?: object;
  touched?: object;
}

/**
 * Input component
 * @param param0
 * @returns
 */
const Input: FC<IInputProps> = ({
  label,
  labelProps,
  value,
  name,
  className,
  startIcon,
  endIcon,
  errors,
  touched,
  children,
  ...rest
}) => {
  const error = getError(name!, errors!, touched!);
  const classes = classNames(
    "form-control",
    {
      "is-valid": touched?.[name as keyof typeof touched],
      "is-invalid": error,
    },
    className
  );
  return (
    <>
      {label && (
        <Typography variant="label" {...labelProps}>
          {label}
        </Typography>
      )}
      <Box className={classes}>
        {startIcon && <Icon className="me-2" icon={startIcon} />}
        <input value={value} name={name} {...rest} />
        {children}
        {endIcon && <Icon className="me-2" icon={endIcon} />}
      </Box>
      {error && <span className="invalid-feedback">{error}</span>}
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Input;
