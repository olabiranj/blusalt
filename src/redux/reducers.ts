import { combineReducers } from "redux";
import todoSliceReducer from "./slices/todo-slice";

import { baseApi } from "./services/base-service";

const rootReducer = combineReducers({
  triatronWebApi: baseApi.reducer,
  todo: todoSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
