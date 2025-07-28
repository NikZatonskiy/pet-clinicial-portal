import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "@slices/tableSlice";
import homeModalReducer from "@slices/homeModalSlice";

export default configureStore({
  reducer: {
    table: tableReducer,
    homeModal: homeModalReducer,
  },
});
