import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotice } from "../../types/notice.interface";

export interface SortState {
  tag: string;
}

const initialState: SortState = {
  tag: "",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sort: (state, action: PayloadAction<string>) => {
      state.tag = action.payload;
    },
    reset: state => {
      state.tag = "";
    },
  },
});

export const { sort, reset } = sortSlice.actions;
export default sortSlice.reducer;
