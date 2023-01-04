import { IconName } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import { forwardRef } from "react";
import { getError } from "../util";
import Box from "./Box";
import Typography, { ITypographyProps } from "./Typegraphy";

export type ITextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: string;
    value: string;
    icon?: IconName;
    errors?: object;
    touched?: object;
    label?: string;
    labelProps?: ITypographyProps;
  };
export type TextareaRef = HTMLTextAreaElement;

/**
 * Textarea component
 */
const Textarea = forwardRef<TextareaRef, ITextareaProps>(
  (
    {
      label,
      name,
      value,
      className,
      errors,
      touched,
      labelProps,
      ...rest
    }: ITextareaProps,
    ref
  ) => {
    const error = getError(name!, errors!, touched!);

    const classes = classNames(
      "form-textarea",
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
          <textarea name={name} value={value} ref={ref} {...rest}></textarea>
        </Box>
        {error && <span className="invalid-feedback">{error}</span>}
      </>
    );
  }
);

export default Textarea;
