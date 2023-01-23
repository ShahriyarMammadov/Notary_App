export default function favoriteReducer(state = [], action) {
  switch (action.type) {
    case "FAV":
      return [...state, { state: action.payload }];
    default:
      return state;
  }
}
