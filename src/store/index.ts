import { configureStore } from "@reduxjs/toolkit";
import alertReducer, { ALERT_REDUCER_NAME } from "./reducers/alert.reducer";
import categoryReducer, {
  CATEGORY_REDUCER_NAME,
} from "./reducers/category.reducer";
import designationReducer, {
  DESIGNATION_REDUCER_NAME,
} from "./reducers/designation.reducer";
import postReducer, { POST_REDUCER_NAME } from "./reducers/post.reducer";
import skillReducer, { SKILL_REDUCER_NAME } from "./reducers/skill.reducer";

/**
 * Global configure store
 */

const Store = configureStore({
  reducer: {
    [ALERT_REDUCER_NAME]: alertReducer,
    [CATEGORY_REDUCER_NAME]: categoryReducer,
    [DESIGNATION_REDUCER_NAME]: designationReducer,
    [SKILL_REDUCER_NAME]: skillReducer,
    [POST_REDUCER_NAME]: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
