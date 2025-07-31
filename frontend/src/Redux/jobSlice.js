import { createSlice } from "@reduxjs/toolkit";
const jobSlice = createSlice({
  name: "job",
  initialState: {
    alljobs: [],
    allAdminJobs: [],
    singlejob: null,
    searchJobByText:"",
  },
  reducers: {
    setAlljobs: (state, action) => {
      state.alljobs = action.payload;
    },
    setsinglejob: (state, action) => {
      state.singlejob = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
  },
});
export const { setAlljobs, setsinglejob, setAllAdminJobs, setSearchJobByText,  } = jobSlice.actions;
export default jobSlice.reducer;
