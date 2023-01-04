import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./reducers/alert.reducer";
import categoryReducer from "./reducers/category.reducer";

/**
 * Global configure store
 */

const Store = configureStore({
  reducer: {
    alert: alertReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
