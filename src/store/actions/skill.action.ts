import { createAsyncThunk } from "@reduxjs/toolkit";
import { skillService, ISkill } from "../../services/skill.services";
import { SliceStatus } from "../../types";
import { AppContent } from "../../util/AppContent";
import { alertShow } from "./alert.action";

interface ISkillState {
  status: SliceStatus;
  skills: ISkill[];
}

/**
 * Get all skills */
const fetchSkills = createAsyncThunk("skill/getAll", async () => {
  try {
    const { data } = await skillService.getAll();
    return data;
  } catch (error) {}
});

/**
 * Add skill */
const addSkill = createAsyncThunk(
  "skill/add",
  async (body: ISkill, { dispatch }) => {
    const { status, data } = await skillService.create(body);
    if (status === 201) {
      dispatch(
        alertShow({ message: AppContent.message.add, color: "success" })
      );
    }
    return data;
  }
);

/**
 * Update skill */
const updateSkill = createAsyncThunk(
  "skill/update",
  async (body: ISkill, { dispatch }) => {
    const { status, data } = await skillService.update(body);
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
const deleteSkill = createAsyncThunk(
  "skill/deleted",
  async (id: string, { dispatch }) => {
    const { status, data } = await skillService.deleted(id);
    if (status === 200) {
      dispatch(
        alertShow({ message: AppContent.message.delete, color: "success" })
      );
    }
    return data;
  }
);

export { fetchSkills, addSkill, updateSkill, deleteSkill, type ISkillState };
