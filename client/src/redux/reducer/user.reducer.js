let initialState = {
  laoding: true,
  error: undefined,
  data: undefined,
  searchdata: undefined,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "PENDING":
      return {
        loading: true,
      };
    case "FULFILLED":
      return {
        data: action.payload,
        loading: false,
      };
    case "REJECTED":
      return {
        error: action.payload,
        loading: false,
      };
    case "FULFILLED_SEARCH":
      return {
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
