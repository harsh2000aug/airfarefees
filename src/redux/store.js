// import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import reduxThunk from "redux-thunk";

import rootReducer from "./root.reducer";

export const store = createStore(
  rootReducer,
  applyMiddleware(logger, reduxThunk)
);

export const persistor = persistStore(store);
