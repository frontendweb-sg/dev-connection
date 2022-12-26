import { FC } from "react";

export interface IImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

/**
 * Image component
 * @param param0
 * @returns
 */
const Image: FC<IImageProps> = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} />;
};

Image.defaultProps = {
  src: "/post-1.jpg",
};
export default Image;
