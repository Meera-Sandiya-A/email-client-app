import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailList: [],
  selectedEmail: "",
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    updateEmailList: (state, action) => {
      state.emailList = action.payload;
    },
    selectEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    addFavoriteEmail: (state, action) => {
      const id = action.payload;

      state.emailList = state.emailList.map((email) =>
        email.id === id ? { ...email, favorite: true } : email
      );
    },
    addReadEmail: (state, action) => {
      const id = action.payload;

      state.emailList = state.emailList.map((email) =>
        email.id === id ? { ...email, read: true } : email
      );
    },
  },
});

export const { selectEmail, updateEmailList, addReadEmail, addFavoriteEmail } =
  emailSlice.actions;

export default emailSlice.reducer;
