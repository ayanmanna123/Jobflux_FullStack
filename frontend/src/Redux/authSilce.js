import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loding: false,
    user: null,
  },
  reducers: {
    setLoding: (state, action) => {
      state.loding = action.payload;
    },
    setuser: (state, action) => {
      state.user = {
        ...state.user, // keep previous values
        ...action.payload, // overwrite only what changed
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoding, setuser } = authSlice.actions;

export default authSlice.reducer;
