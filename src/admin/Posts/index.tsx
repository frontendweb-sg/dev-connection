import { useEffect, useRef } from "react";
import Button from "../../components/Button";
import Modal, { ModalRef } from "../../components/Modal";

import PageTitle from "../../components/PageTitle";
import AddPost from "../../components/AddPost";
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchPosts } from "../../store/actions/post.action";
import { selectPost } from "../../store/reducers/post.reducer";
import { AppContent } from "../../util/AppContent";
import PostLists from "./PostLists";

const Posts = () => {
  const modalRef = useRef<ModalRef>(null);
  const { posts, status } = useAppSelector(selectPost);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  return (
    <>
      <PageTitle>
        <Button onClick={modalRef.current?.onOpen}>{AppContent.addText}</Button>
      </PageTitle>

      <PostLists posts={posts} />

      <AddPost />
      <Modal ref={modalRef} label="Add Post"></Modal>
    </>
  );
};

export default Posts;
