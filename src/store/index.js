import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import { defaultSerializeQueryArgs } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export default store;
