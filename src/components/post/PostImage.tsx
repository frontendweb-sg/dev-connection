import classNames from "classnames";
import { FC } from "react";
import Box, { IBoxProps } from "../Box";
import Image, { IImageProps } from "../Image";

/**
 * Post image component
 * @returns
 */
interface IPostImageProps {
  boxProps?: IBoxProps;
  imgProps?: IImageProps;
  src?: string;
  alt?: string;
  className?: string;
}
const PostImage: FC<IPostImageProps> = ({
  src,
  alt,
  boxProps,
  imgProps,
  className,
  ...rest
}) => {
  const classes = classNames("post-row post-image", className);
  return (
    <Box className={classes} {...boxProps}>
      <Image src={src} alt={alt} {...imgProps} />
    </Box>
  );
};

export default PostImage;
