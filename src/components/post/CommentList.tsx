import Avatar from "../Avatar";
import Box from "../Box";
import Typography from "../Typegraphy";
import Reply from "./Reply";

const CommentList = () => {
  return (
    <Box className="comment-list mt-3">
      <ul>
        <li>
          <Box className="d-flex align-items-start mb-2">
            <Avatar className="me-2" />
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              soluta cumque, voluptate nesciunt sint,
            </Typography>
          </Box>
          <Reply />
        </li>
      </ul>
    </Box>
  );
};

export default CommentList;
