import classNames from "classnames";
import { useRef, useState } from "react";
import Box from "./Box";
import IconButton from "./IconButton";
/**
 * Uploader component
 * 1. images
 * 2. video
 *
 * @returns
 */

type IconType = "image" | "camera" | "video";
type UploaderProps = React.InputHTMLAttributes<HTMLInputElement> & {
  dropzone?: boolean;
  icon?: IconType;
  accept: string;
} & typeof defaultProps;

const defaultProps = {
  dropzone: false,
  icon: "image",
  accept: ".png,.jpg,.jpeg",
  multiple: false,
};

const Uploader = ({
  icon,
  dropzone,
  className,
  onChange,
  accept,
  multiple,
  children,
  ...rest
}: UploaderProps) => {
  const [error, setError] = useState<string | null>(null);
  const uploaderRef = useRef<HTMLInputElement>(null);
  const classes = classNames(dropzone ? "dropzone" : "uploader", className);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    setError(null);
    if (multiple && files?.length! > 5) {
      setError("You can not upload more than 5 items");
      return;
    }

    onChange?.(e);
  };

  return (
    <>
      <Box
        className={classes}
        data-text={rest["data-text" as keyof typeof rest]!}
      >
        {!dropzone && <IconButton icon={icon} />}
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          ref={uploaderRef}
          {...rest}
        />
        {children}
      </Box>
      {error && <span>{error}</span>}
    </>
  );
};

Uploader.defaultProps = defaultProps;
export default Uploader;
