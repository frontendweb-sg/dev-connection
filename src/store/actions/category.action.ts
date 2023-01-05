import { createAsyncThunk } from "@reduxjs/toolkit";
import { categoryService, ICategory } from "../../services/category.services";
import { SliceStatus } from "../../types";
import { AppContent } from "../../util/AppContent";
import { alertShow } from "../actions/alert.action";

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
const addCategory = createAsyncThunk(
  "category/add",
  async (body: ICategory, { dispatch }) => {
    const { status, data } = await categoryService.create(body);
    if (status === 201) {
      dispatch(
        alertShow({ message: AppContent.message.add, color: "success" })
      );
    }
    return data;
  }
);

/**
 * Update Category */
const updateCategory = createAsyncThunk(
  "category/update",
  async (body: ICategory, { dispatch }) => {
    const { status, data } = await categoryService.update(body);
    if (status === 200) {
      dispatch(
        alertShow({ message: AppContent.message.update, color: "success" })
      );
    }
    return data;
  }
);

/**
 * Delete category */
const deleteCategory = createAsyncThunk(
  "category/deleted",
  async (id: string, { dispatch }) => {
    const { status, data } = await categoryService.deleted(id);
    if (status === 200) {
      dispatch(
        alertShow({ message: AppContent.message.delete, color: "success" })
      );
    }
    return data;
  }
);

export {
  fetchCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  type ICategoryState,
};
