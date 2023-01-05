import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ICategory } from "../../services/category.services";
import {
  ICategoryState,
  fetchCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../actions/category.action";

/**
 * Initial state
 */
const initialState: ICategoryState = {
  status: "idle",
  categories: [],
};

const slice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, { payload }) => {
        state.categories = payload!;
        state.status = "succeeded";
      })
      .addCase(addCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCategory.fulfilled, (state, { payload }) => {
        state.categories.push(payload);
        state.status = "succeeded";
      })
      .addCase(updateCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        updateCategory.fulfilled,
        (state, { payload }: PayloadAction<ICategory>) => {
          state.categories = state.categories.map((row) =>
            row._id === payload._id ? { ...row, ...payload } : row
          );
          state.status = "succeeded";
        }
      )
      .addCase(deleteCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCategory.fulfilled, (state, { payload }) => {
        state.categories = state.categories.filter(
          (item) => item._id !== payload._id
        );
        state.status = "succeeded";
      });
  },
});

export const selectCategory = (state: RootState) => state.category;
export default slice.reducer;
