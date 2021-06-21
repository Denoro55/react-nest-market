import { configureStore } from "@reduxjs/toolkit";
import reduxThunkMiddleware from "redux-thunk";

import { appReducer, userReducer } from "./reducers";

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
  middleware: [loggerMiddleware, reduxThunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
