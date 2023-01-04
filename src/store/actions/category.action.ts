import { createAsyncThunk } from "@reduxjs/toolkit";
import { categoryService, ICategory } from "../../services/category.services";
import { SliceStatus } from "../../types";

interface ICategoryState {
  status: SliceStatus;
  categories: ICategory[];
}

/**
 * Get all categories */
const fetchCategory = createAsyncThunk("category/getAll", async () => {
  try {
    const { data } = await categoryService.getAll();
    return data;
  } catch (error) {}
});

/**
 * Add category */
const addCategory = createAsyncThunk("category/add", async () => {});

/**
 * Update Category */
const updateCategory = createAsyncThunk(
  "category/update",
  async (body: ICategory) => {
    const response = await categoryService.update(body);
    return response;
  }
);

/**
 * Delete category */
const deleteCategory = createAsyncThunk("category/deleted", async () => {});

export {
  fetchCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  type ICategoryState,
};
