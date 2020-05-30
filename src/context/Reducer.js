import { ADD_DATA, REMOVE_DATA, LOADER } from "./action.types";

const Reducer = function (state, action) {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    case REMOVE_DATA:
      return [...state, action.payload];
    case LOADER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default Reducer;
