import { FC } from "react";
import Box from "../Box";
import IconButton from "../IconButton";

/**
 *
 * @returns
 */
interface ILikeProps {
  like?: number;
  dislike?: number;
}
const Like: FC<ILikeProps> = ({ like, dislike }) => {
  return (
    <Box className="post-like">
      <IconButton icon="heart">{like} likes</IconButton>
      <IconButton icon="heart">{dislike} dislikes</IconButton>
    </Box>
  );
};

Like.defaultProps = {
  like: 0,
  dislike: 0,
};
export default Like;
