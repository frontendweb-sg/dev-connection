import Box from "../../components/Box";
import Col from "../../components/Col";
import Post from "../../components/post/Post";
import Row from "../../components/Row";
import { IPost } from "../../services/post.services";

type PostListProps = {
  posts: IPost[];
};
const PostLists = ({ posts }: PostListProps) => {
  return (
    <Row>
      {posts.map((post: IPost, index: number) => {
        return (
          <Col key={post._id}>
            <Post post={post} />
          </Col>
        );
      })}
    </Row>
  );
};

export default PostLists;
