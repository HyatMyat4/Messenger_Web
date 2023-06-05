import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface Message_Reactions {
  Giver_Name: string;
  Giver_Profile: string;
  Reaction: string;
}

export interface actionState {
  Reactions_Name: Message_Reactions | any;
  Image_URL: string;
}

// Define the initial state using that type
const initialState: actionState = {
  Reactions_Name: {},
  Image_URL: "",
};

export const actionSlice = createSlice({
  name: "action",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set_Reaction: (state, action) => {
      state.Reactions_Name = action.payload;
    },
    set_Image_URL: (state, action) => {
      state.Image_URL = action.payload;
    },
  },
});

export const { set_Reaction, set_Image_URL } = actionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const Reactions_Name_data = (state: RootState) =>
  state.action.Reactions_Name;
export const Image_URL_data = (state: RootState) => state.action.Image_URL;

export default actionSlice.reducer;
