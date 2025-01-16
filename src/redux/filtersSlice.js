import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "", // Значення фільтра
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload; // Оновлюємо значення фільтра
    },
  },
});

// Експортуємо редюсер та екшен
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
