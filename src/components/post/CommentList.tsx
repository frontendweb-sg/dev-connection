import { IComment } from "../../services/post.services";
import Avatar from "../Avatar";
import Box from "../Box";
import Typography from "../Typegraphy";
import Reply from "./Reply";

type CommentProps = {
  comments: IComment[];
};
const CommentList = ({ comments }: CommentProps) => {
  return (
    <Box className="comment-list mt-3">
      <ul>
        {comments.map((comment: IComment) => {
          return (
            <li key={comment._id}>
              <Box className="d-flex align-items-start mb-2">
                <Avatar className="me-2" />
                <Typography variant="body2">{comment.message}</Typography>
              </Box>
              {/* <Reply /> */}
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default CommentList;
