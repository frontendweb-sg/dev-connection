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
const url = "";
const Post: FC<IPostProps> = ({ post }) => {
  return (
    <Box className="post">
      <PostUser
        name="Pradeep kumar"
        designation="Sr. software engineer"
        className="mb-3"
      />
      <Typography variant="body1">{post?.description}</Typography>
      <PostImage src={post?.image} />

      <Typography variant="subtitle2">
        Posted on <DateTime date={post?.createdAt} />
      </Typography>
      <Box className="d-flex aling-items-center">
        <Like data={post?.likes!} />
        <Share />
      </Box>
      <Comment />

      <CommentList comments={post?.comments!} />
    </Box>
  );
};

export default Post;
