import { FC, useMemo } from "react";
import { ILike } from "../../services/post.services";
import Box from "../Box";
import Button from "../Button";

/**
 *
 * @returns
 */
type LikeProps = {
  data: ILike[];
};
const Like = ({ data }: LikeProps) => {
  const like = data.filter((like: ILike) => like.like);
  const dislikes = data.filter((like: ILike) => !like.like);
  return (
    <Box className="post-like">
      <Button variant="text" startIcon="heart">
        {`${like.length} liked`}
      </Button>
      <Button variant="text" startIcon="heart">
        {`${dislikes.length} disliked`}
      </Button>
    </Box>
  );
};

Like.defaultProps = {
  like: 0,
  dislike: 0,
};
export default Like;
