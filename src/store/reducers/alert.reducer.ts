import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IAlert, alertHide, alertShow } from "../actions/alert.action";

const initialState: IAlert = {
  visible: false,
  message: "Something went worng!",
  color: "success",
  size: "sm",
  direction: "right",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(alertShow.fulfilled, (state, action: PayloadAction<IAlert>) => {
        const { payload } = action;
        state.visible = true;
        state.message = payload.message;
        state.color = payload.color;
        state.size = payload.size;
      })
      .addCase(alertHide.fulfilled, (state) => {
        state.visible = false;
        state.message = "";
      });
  },
});

export const ALERT_REDUCER_NAME = "alert";
export const alertState = (state: RootState) => state.alert;
export default alertSlice.reducer;
