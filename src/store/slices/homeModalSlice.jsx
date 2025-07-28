import { createSlice } from "@reduxjs/toolkit";

export const homeModalSlice = createSlice({
  name: "homeModal",
  initialState: {
    showTooltip: false,
  },
  reducers: {
    setShowTooltip: (state, action) => {
      state.showTooltip = action.payload;
    },
  },
});

export const { setShowTooltip } = homeModalSlice.actions;

export default homeModalSlice.reducer;
