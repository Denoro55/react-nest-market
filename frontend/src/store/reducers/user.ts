import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IDepartment } from "api/types/user";

interface IInitialState {
  departments: IDepartment[];
  selectedDepartment: IDepartment | null;
}

const initialState: IInitialState = {
  departments: [],
  selectedDepartment: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.departments = action.payload.departments;
      state.selectedDepartment = state.departments[0];
    },
    setSelectedDepartment(state, action: PayloadAction<IDepartment | null>) {
      state.selectedDepartment = action.payload;
    }
  },
});

export const { setUser, setSelectedDepartment } = userSlice.actions;

export default userSlice.reducer;
