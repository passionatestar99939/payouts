import { configureStore } from "@reduxjs/toolkit"
// import logger from "redux-logger"

import mainTableReducer from "./slices/mainTableSlice"
import totalValueSlice from "./slices/totalValueSlice"

export const store = configureStore({
  reducer: { mainTable: mainTableReducer, totalValue: totalValueSlice },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
