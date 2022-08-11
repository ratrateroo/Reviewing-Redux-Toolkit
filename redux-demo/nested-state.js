const redux = require("redux");
const { legacy_createStore: createStore } = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Kimie Tsukakoshi ",
  address: {
    street: "15 Hickson Road Wharf 4/5",
    city: "Walsh Bay NSW 2000",
    state: "Sydney",
  },
};

//action type
const STREET_UPDATED = "STREET_UPDATED";

//action creator
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload
      //     }
      //   }
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});
store.dispatch(updateStreet("456 Main St"));
unsubscribe();
