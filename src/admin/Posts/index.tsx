import { useEffect } from "react";
import Button from "../../components/Button";

import PageTitle from "../../components/PageTitle";
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchPosts } from "../../store/actions/post.action";
import { selectPost } from "../../store/reducers/post.reducer";
import { AppContent } from "../../util/AppContent";
import PostLists from "./PostLists";

const Posts = () => {
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
        <Button>{AppContent.addText}</Button>
      </PageTitle>

      <PostLists posts={posts} />
    </>
  );
};

export default Posts;
