const collectionReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "RELEASE":
      return state.filter(pokemon => pokemon.name !== action.payload);
    default:
      return state;
  }
};

export default collectionReducer;
