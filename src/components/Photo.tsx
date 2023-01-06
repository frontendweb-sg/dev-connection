import { useRef } from "react";
import classNames from "classnames";
import Box from "./Box";
import IconButton from "./IconButton";

type PhotoProps = React.InputHTMLAttributes<HTMLInputElement> & {};
const Photo = ({ name, value, className, ...rest }: PhotoProps) => {
  const classes = classNames("", className);
  const inpRef = useRef<HTMLInputElement>(null);

  const handleClick = () => inpRef.current?.click();

  return (
    <Box className={classes}>
      <IconButton type="button" icon="camera" onClick={handleClick} />
      <label htmlFor={name}></label>
      <input ref={inpRef} name={name} value={value} type="file" {...rest} />
    </Box>
  );
};

export default Photo;
