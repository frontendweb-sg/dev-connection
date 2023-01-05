import { createAsyncThunk } from "@reduxjs/toolkit";
import { Color, Direction, Size } from "../../types";

let timer: ReturnType<typeof setTimeout>;
interface IAlert {
  visible?: boolean;
  message: string;
  color?: Color;
  size?: Size;
  direction?: Direction;
}

/**
 * Alert show
 */
const alertShow = createAsyncThunk(
  "alert/show",
  (state: IAlert, { dispatch }) => {
    timer = setTimeout(() => {
      dispatch(alertHide());
    }, 3000);
    return state;
  }
);

/**
 * Alert hide
 */
const alertHide = createAsyncThunk("alert/hide", async () => {
  if (timer) {
    clearTimeout(timer);
  }
});

export { alertHide, alertShow, type IAlert };
