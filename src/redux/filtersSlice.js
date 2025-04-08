// src/redux/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Export the action to update the filter
export const { changeFilter } = filtersSlice.actions;

// Selector for the filter value
export const selectNameFilter = (state) => state.filters.name;

// Default export the reducer
export default filtersSlice.reducer;
