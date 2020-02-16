const collectionReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      // let added =
      return [...state, action.payload];
    case "RELEASE":
      return state.filter(pokemon => pokemon.name !== action.payload);
    default:
      return state;
  }
};

export default collectionReducer;
