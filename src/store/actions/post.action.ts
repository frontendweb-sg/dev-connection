import {
  postService,
  IPost,
  IPostStatus,
  IComment,
  ILike,
} from "../../services/post.services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { alertShow } from "./alert.action";

const CREATE_POST = "post/create";
const UPDATE_POST = "post/update";
const DELETE_POST = "post/delete";
const FETCH_POSTS = "post/all";
const FETCH_POST = "post/single";

/**
 * Get all posts
 */
const fetchPosts = createAsyncThunk(FETCH_POSTS, async (_, { dispatch }) => {
  try {
    const { data } = await postService.getAll();
    return data;
  } catch (error) {
    if (error instanceof Error)
      dispatch(alertShow({ message: error.message, color: "danger" }));
  }
});

/**
 * Get single post by post id
 */
const fetchPost = createAsyncThunk(
  FETCH_POST,
  async (id: string, { dispatch }) => {
    try {
      const { data } = await postService.getById(id);
      return data;
    } catch (error) {
      if (error instanceof Error)
        dispatch(alertShow({ message: error.message, color: "danger" }));
    }
  }
);

/**
 * Create post */
const addPost = createAsyncThunk(
  CREATE_POST,
  async (body: IPost, { dispatch }) => {
    try {
      const { data } = await postService.create(body);
      return data;
    } catch (error) {
      if (error instanceof Error)
        dispatch(alertShow({ message: error.message, color: "danger" }));
    }
  }
);

/**
 * Update post */
const updatePost = createAsyncThunk(
  UPDATE_POST,
  async (body: IPost, { dispatch }) => {
    try {
      const { data } = await postService.update(body);
      return data;
    } catch (error) {
      if (error instanceof Error)
        dispatch(alertShow({ message: error.message, color: "danger" }));
    }
  }
);

/**
 * Delete post */
const deletePost = createAsyncThunk(
  DELETE_POST,
  async (id: string, { dispatch }) => {
    try {
      const { data } = await postService.getById(id);
      return data;
    } catch (error) {
      if (error instanceof Error)
        dispatch(alertShow({ message: error.message, color: "danger" }));
    }
  }
);

export { fetchPosts, fetchPost, addPost, updatePost, deletePost };
