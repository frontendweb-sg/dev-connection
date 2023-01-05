import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  designationService,
  IDesignation,
} from "../../services/designation.services";
import { SliceStatus } from "../../types";
import { AppContent } from "../../util/AppContent";
import { alertShow } from "./alert.action";

interface IDesignationState {
  status: SliceStatus;
  designations: IDesignation[];
}

/**
 * Get all designation */
const fetchDesignation = createAsyncThunk("designation/getAll", async () => {
  try {
    const { data } = await designationService.getAll();
    return data;
  } catch (error) {}
});

/**
 * Add designation */
const addDesignation = createAsyncThunk(
  "designation/add",
  async (body: IDesignation, { dispatch }) => {
    const { status, data } = await designationService.create(body);
    if (status === 201) {
      dispatch(
        alertShow({ message: AppContent.message.add, color: "success" })
      );
    }
    return data;
  }
);

/**
 * Update designation */
const updateDesignation = createAsyncThunk(
  "designation/update",
  async (body: IDesignation, { dispatch }) => {
    const { status, data } = await designationService.update(body);
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
const deleteDesignation = createAsyncThunk(
  "designation/deleted",
  async (id: string, { dispatch }) => {
    const { status, data } = await designationService.deleted(id);
    if (status === 200) {
      dispatch(
        alertShow({ message: AppContent.message.delete, color: "success" })
      );
    }
    return data;
  }
);

export {
  fetchDesignation,
  addDesignation,
  updateDesignation,
  deleteDesignation,
  type IDesignationState,
};
