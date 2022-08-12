//change require to imports

//const createSlice = require("@reduxjs/toolkit").createSlice;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 20,
};

//action type
//action creator
//action object
//  -automatically created by createSlice

//state - automatically added by createSlice
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  //reducer switch statements - automatically created by createSlice
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

//reducer must be exported from cakeSlice.reducer
//module.exports = cakeSlice.reducer;
export default cakeSlice.reducer;

//actions must be exported as cakeActions from cakeSlice.actions
//module.exports.cakeActions = cakeSlice.actions;

//destructured and exported
export const { ordered, restocked } = cakeSlice.actions;
