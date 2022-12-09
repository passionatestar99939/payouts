import { createSlice } from "@reduxjs/toolkit"
import { tableData } from "../../data"

const initialState = {
  data: [...tableData],
}


export const mainTableSlice = createSlice({
  name: "mainTable_____",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = [...action.payload.data]
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateData } = mainTableSlice.actions

export default mainTableSlice.reducer
