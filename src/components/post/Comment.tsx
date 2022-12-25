import Avatar from "../Avatar";
import Box from "../Box";
import Input from "../Input";

/**
 * Comment component
 * @returns
 */
const Comment = () => {
  return (
    <Box className="post-comment mt-3">
      <Box className="d-flex align-items-center">
        <Avatar className="me-2" size="sm" />
        <Input placeholder="Add comment" />
      </Box>
    </Box>
  );
};

export default Comment;
