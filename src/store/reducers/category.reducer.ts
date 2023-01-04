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
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categories = action.payload!;
        state.status = "succeeded";
      })
      .addCase(addCategory.pending, (state) => {
        state.status = "loading";
      });
  },
});

export const selectCategory = (state: RootState) => state.category;
export default slice.reducer;
