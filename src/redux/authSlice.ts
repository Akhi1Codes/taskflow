import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User }>) => {
      const { user } = action.payload;
      state.user = user;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
