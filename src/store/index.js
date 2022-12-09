import { configureStore } from "@reduxjs/toolkit"
// import logger from "redux-logger"

import mainTableReducer from "./slices/mainTableSlice"

export const store = configureStore({
  reducer: { mainTable: mainTableReducer },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
