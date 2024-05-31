import { notificationTypes } from "./notifications.type";

export const showToast = (data) => {
  return {
    type: notificationTypes.SHOW_TOAST,
    payload: data,
  };
};

export const hideToast = () => {
  return {
    type: notificationTypes.HIDE_TOAST,
  };
};
