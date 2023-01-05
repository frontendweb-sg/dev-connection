import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IDesignation } from "../../services/designation.services";
import {
  IDesignationState,
  addDesignation,
  updateDesignation,
  deleteDesignation,
  fetchDesignation,
} from "../actions/designation.action";

/**
 * Initial state
 */
const initialState: IDesignationState = {
  status: "idle",
  designations: [],
};

const slice = createSlice({
  name: "designation",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDesignation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDesignation.fulfilled, (state, { payload }) => {
        state.designations = payload!;
        state.status = "succeeded";
      })
      .addCase(addDesignation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addDesignation.fulfilled, (state, { payload }) => {
        state.designations.push(payload);
        state.status = "succeeded";
      })
      .addCase(updateDesignation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        updateDesignation.fulfilled,
        (state, { payload }: PayloadAction<IDesignation>) => {
          state.designations = state.designations.map((row) =>
            row._id === payload._id ? { ...row, ...payload } : row
          );
          state.status = "succeeded";
        }
      )
      .addCase(deleteDesignation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        deleteDesignation.fulfilled,
        (state, { payload }: PayloadAction<IDesignation>) => {
          state.designations = state.designations.filter(
            (item) => item._id !== payload._id
          );
          state.status = "succeeded";
        }
      );
  },
});

export const selectCategory = (state: RootState) => state.category;
export default slice.reducer;
