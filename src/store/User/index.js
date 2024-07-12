import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  registrations: [],
  nextRegistrationId: 1,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserList: (state, action) => {
      state.users = action.payload;
    },
    setUserRegister: (state, action) => {
      const newRegistration = {
        id: state.nextRegistrationId,
        ...action.payload,
      };
      state.registrations.push(newRegistration);
      state.nextRegistrationId += 1;
    },
  },
});

export const { setUserList, setUserRegister } = userSlice.actions;
export default userSlice.reducer;
