import { notificationTypes } from "./notifications.type";

const INITIAL_STATE = {
  msg: null,
  type: "default",
};

const NotificationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case notificationTypes.SHOW_TOAST:
      return {
        ...state,
        ...action.payload,
      };

    case notificationTypes.HIDE_TOAST:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default NotificationsReducer;
