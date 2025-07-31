import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singlecompany: null,
    companies:[],
  },
  reducers: {
    setsinglecompany: (state, action) => {
      state.singlecompany = action.payload;

    },
    setcompanies:(state , action)=>{
      state.companies=action.payload
    }
  },
});

export const { setsinglecompany ,setcompanies } = companySlice.actions;
export default companySlice.reducer;
