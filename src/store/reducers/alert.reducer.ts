import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Color, Direction, Size } from "../../types";

export interface IAlert {
  visible?: boolean;
  message: string;
  color?: Color;
  size?: Size;
  direction?: Direction;
}

const initialState: IAlert = {
  visible: false,
  message: "Hello world",
  color: "success",
  size: "sm",
  direction: "right",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alertShow: (state, action: PayloadAction<IAlert>) => {
      const { payload } = action;
      state.visible = true;
      state.message = payload.message;
      state.color = payload.color;
      state.size = payload.size;
    },
    alertHide: (state) => {
      state.visible = false;
      state.message = "";
    },
  },
});

// export
export const { alertHide, alertShow } = alertSlice.actions;
export const alertState = (state: RootState) => state.alert;
export default alertSlice.reducer;
