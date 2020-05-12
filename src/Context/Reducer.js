const Reducer = function (state, action) {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, action.payload];
    case "REMOVE_DATA":
      return [...state, action.payload];
    default:
      return state;
  }
};


export default Reducer;