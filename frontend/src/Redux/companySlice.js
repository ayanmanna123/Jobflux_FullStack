import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singlecompany: null,
  },
  reducers: {
    setsinglecompany: (state, action) => {
      state.singlecompany = action.payload;
    },
  },
});

export const { setsinglecompany } = companySlice.actions;
export default companySlice.reducer;
