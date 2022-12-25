import { FC } from "react";
import { IPost } from "../../services/post.services";
import Box from "../Box";
import Comment from "./Comment";
import CommentList from "./CommentList";
import Like from "./Like";
import PostUser from "./PostUser";

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
      <PostUser name="Pradeep kumar" className="mb-3" />
      <Box className="post-image">
        <img src="/post-1.jpg" alt="" />
      </Box>
      <Like />
      <Comment />

      <CommentList />
    </Box>
  );
};

export default Post;
