import { useToggle } from "../../hooks/useToggle";
import Box from "../Box";
import Button from "../Button";
import Comment from "./Comment";

/**
 * Reply component
 * @returns
 */
const Reply = () => {
  const { open, onClose, onOpen } = useToggle();
  return (
    <Box className="post-reply">
      {open && <Comment />}
      {!open && (
        <Button variant="text" onClick={onOpen}>
          Reply
        </Button>
      )}
      {open && <Button onClick={onClose}>Cancel</Button>}
    </Box>
  );
};

export default Reply;
