import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loding: false,
  },
  reducers: {
    setLoding: (state, action) => {
      state.loding = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoding } = authSlice.actions;

export default authSlice.reducer;
