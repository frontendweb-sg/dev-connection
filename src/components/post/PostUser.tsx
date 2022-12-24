import classNames from "classnames";
import { FC } from "react";
import Avatar, { IAvatarProps } from "../Avatar";
import Box from "../Box";
import DateTime from "../DateTime";
import Typography from "../Typegraphy";
import { MomentProps } from "react-moment";

/**
 * Post user component
 * @returns
 */
interface IPostUser extends React.HTMLAttributes<HTMLElement> {
  avatar?: string;
  avatarProps?: IAvatarProps;
  name: string;
  profile?: string;
  date?: MomentProps;
}

const PostUser: FC<IPostUser> = ({
  avatar,
  name,
  profile,
  avatarProps,
  className,
  date,
  ...rest
}) => {
  const classes = classNames("post-user", className);
  return (
    <Box className={classes} {...rest}>
      <Box className="d-flex align-items-center">
        <Avatar {...avatarProps} />
        <Typography className="mb-0 ms-2" variant="subtitle2">
          {name}
          <DateTime className="ms-2 dots" {...date} />
          {profile && (
            <Typography variant="span" className="mb-0 d-block">
              {profile}
            </Typography>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default PostUser;
