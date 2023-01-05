import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ISkill } from "../../services/skill.services";
import {
  ISkillState,
  addSkill,
  deleteSkill,
  fetchSkills,
  updateSkill,
} from "../actions/skill.action";

/**
 * Initial state
 */
const initialState: ISkillState = {
  status: "idle",
  skills: [],
};

const slice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSkills.fulfilled, (state, { payload }) => {
        state.skills = payload!;
        state.status = "succeeded";
      })
      .addCase(addSkill.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addSkill.fulfilled, (state, { payload }) => {
        state.skills.push(payload);
        state.status = "succeeded";
      })
      .addCase(updateSkill.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        updateSkill.fulfilled,
        (state, { payload }: PayloadAction<ISkill>) => {
          state.skills = state.skills.map((row) =>
            row._id === payload._id ? { ...row, ...payload } : row
          );
          state.status = "succeeded";
        }
      )
      .addCase(deleteSkill.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        deleteSkill.fulfilled,
        (state, { payload }: PayloadAction<ISkill>) => {
          state.skills = state.skills.filter(
            (item) => item._id !== payload._id
          );
          state.status = "succeeded";
        }
      );
  },
});

export const SKILL_REDUCER_NAME = "skill";
export const selectCategory = (state: RootState) => state.category;
export default slice.reducer;
