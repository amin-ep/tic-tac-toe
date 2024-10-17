import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";

const store = configureStore({
  reducer: {
    game: gameSlice,
  },
});

export type ReduxStore = ReturnType<typeof store.getState>;
export type GameDispatch = typeof store.dispatch;
export default store;
