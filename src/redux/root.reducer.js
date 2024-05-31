import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import NotificationsReducer from "./notifications/notifications.reducer";
import flDataReducer from "./save-fl-data/flData.reducer";

import changeCurrency from "./currency/currency.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["flData"],
};

const rootReducer = combineReducers({
  notifications: NotificationsReducer,
  flData: flDataReducer,
  currency: changeCurrency,
});

export default persistReducer(persistConfig, rootReducer);
