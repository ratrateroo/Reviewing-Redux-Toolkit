//change require to imports

//const { cakeActions } = require("../cake/cakeSlice");
import { ordered as cakeOrdered } from "../cake/cakeSlice";

//const createSlice = require("@reduxjs/toolkit").createSlice;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfIcecreams: number;
};

const initialState: InitialState = {
  numOfIcecreams: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    //cakeOrdered: for free icecream per cake ordered
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
  // extraReducers: {
  //   ['cake/ordered']: state => {
  //     state.numOfIcecreams--
  //   }
  // }
});

// module.exports = icecreamSlice.reducer;
export default icecreamSlice.reducer;

// module.exports.icecreamActions = icecreamSlice.actions;

//destructured and exported
export const { ordered, restocked } = icecreamSlice.actions;
