import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

type IInitialState = {
  count: number;
};

const initialState = {
  count: 0,
} satisfies IInitialState;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.count++; },
    decrement: (state) => { state.count--; },
    incrementBy: (state, action: PayloadAction<number>) => { state.count += action.payload; },
    decrementBy: (state, action: PayloadAction<number>) => { state.count -= action.payload; },
    resetCount: (state) => { state.count = 0; },
  },
});

export default counterSlice;
