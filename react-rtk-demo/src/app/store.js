//change require to imports

//const configureStore = require("@reduxjs/toolkit").configureStore;
import { configureStore } from "@reduxjs/toolkit";

//const cakeReducer = require("../features/cake/cakeSlice");
import cakeReducer from "../features/cake/cakeSlice";
//const icecreamReducer = require("../features/icecream/icecreamSlice");
import icecreamReducer from "../features/icecream/icecreamSlice";
//const userReducer = require("../features/user/userSlice");
import userReducer from "../features/user/userSlice";
// const logger = reduxLogger.createLogger()

// const reduxLogger = require('redux-logger')
import reduxLogger from "redux-logger";

//configure store using available reducer: cakeReducer,icecreamReducer
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

//module.exports = store;
export default store;
