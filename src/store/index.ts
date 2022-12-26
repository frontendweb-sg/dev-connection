import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./reducers/alert.reducer";

/**
 * Global configure store
 */
const Store = configureStore({
  reducer: {
    alert: alertReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
