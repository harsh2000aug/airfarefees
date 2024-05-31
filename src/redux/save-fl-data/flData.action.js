import { flDataTypes } from "./flData.type";

export const saveFlData = (data) => {
  return {
    type: flDataTypes.SAVE_DATA,
    payload: data,
  };
};
