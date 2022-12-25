import classNames from "classnames";
import { FC } from "react";
import Avatar, { IAvatarProps } from "../Avatar";
import Box from "../Box";
import DateTime from "../DateTime";
import Typography from "../Typegraphy";
import { MomentProps } from "react-moment";
import Dropdown from "../Dropdown";
import NavMenu from "../NavMenu";
import Divider from "../Divider";

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
  const classes = classNames(
    "post-user d-flex  justify-content-between ",
    className
  );
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
      <Dropdown dropdownBodyProps={{ direction: "right" }}>
        <Dropdown.Item icon="edit">Edit</Dropdown.Item>
        <Dropdown.Item icon="eye">Inactive</Dropdown.Item>
        <Divider />
        <Dropdown.Item icon="trash">Delete</Dropdown.Item>
      </Dropdown>
    </Box>
  );
};

export default PostUser;
