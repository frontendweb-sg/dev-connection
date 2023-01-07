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
import Photo from "../../components/Photo";
import Uploader from "../../components/Uploader";

const Posts = () => {
  const modalRef = useRef<ModalRef>(null);
  const { posts, status } = useAppSelector(selectPost);
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };

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
      <Uploader data-text="Upload images" onChange={onChange} />
      <PostLists posts={posts} />
      <Modal ref={modalRef} label="Add Post">
        <AddPost onClose={modalRef.current?.onClose!} />
      </Modal>
    </>
  );
};

export default Posts;
