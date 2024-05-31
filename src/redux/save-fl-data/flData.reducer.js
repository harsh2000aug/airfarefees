import { flDataTypes } from "./flData.type";

const INITIAL_STATE = {};

const flDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case flDataTypes.SAVE_DATA:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default flDataReducer;
