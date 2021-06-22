import { createSlice } from "@reduxjs/toolkit";

import reducers from "./reducers";
import { IInitialState } from "./types";

const initialState: IInitialState = {
  departments: [],
  selectedDepartment: null,
  basket: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const { setUser, setSelectedDepartment, addProduct } = userSlice.actions;

export default userSlice.reducer;
