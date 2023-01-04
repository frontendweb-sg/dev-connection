import { IconName } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import { forwardRef } from "react";
import Box from "./Box";

export type ITextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: string;
    value: string;
    icon?: IconName;
    errors?: object;
    touched?: object;
  };
export type TextareaRef = HTMLTextAreaElement;

/**
 * Textarea component
 */
const Textarea = forwardRef<TextareaRef, ITextareaProps>(
  ({ name, value, className, ...rest }: ITextareaProps, ref) => {
    const classes = classNames("form-textarea", className);
    return (
      <Box className={classes}>
        <textarea name={name} value={value} ref={ref} {...rest}></textarea>
      </Box>
    );
  }
);

export default Textarea;
