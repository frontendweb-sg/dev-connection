import { FC } from "react";
import Box from "../Box";
import Button from "../Button";

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
      <Button variant="text" startIcon="heart">
        0 Liked
      </Button>
      <Button variant="text" startIcon="heart">
        {dislike} dislikes
      </Button>
    </Box>
  );
};

Like.defaultProps = {
  like: 0,
  dislike: 0,
};
export default Like;
