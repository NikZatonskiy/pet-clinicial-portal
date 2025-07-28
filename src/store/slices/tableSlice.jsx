import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    sorting: [
      {
        id: "name",
        desc: true,
      },
    ],
    showTooltip: false,
  },
  reducers: {
    setSorting: (state, action) => {
      state.sorting = action.payload;
    },
    setShowTooltip: (state, action) => {
      state.showTooltip = action.payload;
    },
  },
});

export const { setSorting, setShowTooltip } = tableSlice.actions;

export default tableSlice.reducer;
