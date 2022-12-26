import { FC } from "react";
import { IPost } from "../../services/post.services";
import Box from "../Box";
import DateTime from "../DateTime";
import Typography from "../Typegraphy";
import Comment from "./Comment";
import CommentList from "./CommentList";
import Like from "./Like";
import PostImage from "./PostImage";
import PostUser from "./PostUser";
import Share from "./Share";

/**
 * Post component
 * @returns
 */

interface IPostProps {
  post?: IPost;
}
const Post: FC<IPostProps> = ({ post }) => {
  return (
    <Box className="post">
      <PostUser
        name="Pradeep kumar"
        designation="Sr. software engineer"
        className="mb-3"
      />
      <PostImage />

      <Typography variant="subtitle2">
        Posted on <DateTime />
      </Typography>
      <Box className="d-flex aling-items-center">
        <Like />
        <Share />
      </Box>
      <Comment />

      <CommentList />
    </Box>
  );
};

export default Post;
