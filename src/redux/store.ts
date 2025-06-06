import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./features/counter-slice";

export const store = configureStore({
  reducer: {
    [counterSlice.reducerPath]: counterSlice.reducer,
  },
  // devTools: ENV_MODE === "local" && !!window.__REDUX_DEVTOOLS_EXTENSION__,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
