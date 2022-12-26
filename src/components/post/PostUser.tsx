import classNames from "classnames";
import { FC } from "react";
import { MomentProps } from "react-moment";
import Avatar, { IAvatarProps } from "../Avatar";
import Box from "../Box";
import DateTime from "../DateTime";
import Typography from "../Typegraphy";
import Dropdown from "../Dropdown";
import Divider from "../Divider";
import { AppProps } from "../../types";

/**
 * Post user component
 * @returns
 */
interface IPostUser extends AppProps {
  avatar?: string;
  avatarProps?: IAvatarProps;
  name: string;
  designation?: string;
  date?: MomentProps;
}

const PostUser: FC<IPostUser> = ({
  avatar,
  name,
  designation,
  avatarProps,
  className,
  date,
  ...rest
}) => {
  const classes = classNames("post-row justify-content-between", className);
  return (
    <Box className={classes} {...rest}>
      <Box className="d-flex align-items-center">
        <Avatar size="sm" {...avatarProps} />
        <Typography className="mb-0 ms-2" variant="subtitle2">
          {name}
          <DateTime className="ms-2 dots" {...date} />
          {designation && (
            <Typography variant="span" className="mb-0 d-block">
              {designation}
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
