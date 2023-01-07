import { useRef, forwardRef, useImperativeHandle } from "react";
import classNames from "classnames";
import Box from "./Box";
import IconButton from "./IconButton";

type PhotoProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isIcon?: boolean;
};

const defaultProps = {
  isIcon: false,
};

export type PhotoRef = {
  inpRef: HTMLInputElement | null;
};
const Photo = forwardRef<PhotoRef, PhotoProps>((props, ref) => {
  const { name, value, isIcon, className, children, ...rest } = props;
  const classes = classNames(isIcon ? "dropzone-icon" : "dropzone", className);
  const inpRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => inpRef.current?.click();

  useImperativeHandle(ref, () => ({
    inpRef: inpRef.current,
  }));

  return (
    <Box className={classes}>
      {isIcon && (
        <IconButton type="button" icon="camera" onClick={handleClick} />
      )}

      <input ref={inpRef} name={name} value={value} type="file" {...rest} />
      {children}
    </Box>
  );
});

Photo.defaultProps = defaultProps;
export default Photo;
