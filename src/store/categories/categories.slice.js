import { createSlice } from "@reduxjs/toolkit";
import { categoriesName } from "./categories.type";

const initialState = categoriesName.All;

export const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveCategory: (_, action) => action.payload,
  },
});

export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
