import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IPost } from "../../services/post.services";
import { SliceStatus } from "../../types";
import { fetchPosts } from "../actions/post.action";

interface IPostState {
  status: SliceStatus;
  posts: IPost[];
  post: IPost | null;
}

const initialState: IPostState = {
  status: "idle",
  posts: [],
  post: null,
};

/**
 * Post reducer
 */
export const POST_REDUCER_NAME = "post";
const slice = createSlice({
  name: POST_REDUCER_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload!;
        state.status = "succeeded";
      });
  },
});

export const selectPost = (state: RootState) => state.post;
export default slice.reducer;
