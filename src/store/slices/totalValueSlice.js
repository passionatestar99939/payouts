import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: { paid: 0, unpaid: 0, ready: 0 },
}

export const totalValueSlice = createSlice({
  name: "totalValue______",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = {...action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateData } = totalValueSlice.actions

export default totalValueSlice.reducer
