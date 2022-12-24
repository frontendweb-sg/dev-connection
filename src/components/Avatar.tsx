import classNames from "classnames";
import { FC } from "react";

type TImage = "xs" | "sm" | "md" | "lg" | "xl";
export interface IAvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: TImage;
}
/**
 * Image component
 * @param size
 * @param src
 * @param alt
 * @param className
 * @returns
 */
const Avatar: FC<IAvatarProps> = ({ size, src, alt, className, ...rest }) => {
  const classes = classNames("avatar", { ["avatar-" + size]: size }, className);
  return (
    <div className={classes}>
      <img src={src} alt={alt} {...rest} />
    </div>
  );
};

Avatar.defaultProps = {
  size: "xs",
  src: "/avatar.png",
};

export default Avatar;
