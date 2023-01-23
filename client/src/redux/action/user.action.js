import axios from "axios";

export const usersAction = () => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get(`http://localhost:3000/users`);
      dispatch({
        type: "FULFILLED",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: error,
      });
    }
  };
};
export const searchAction = (data) => {
  return { type: "FULFILLED_SEARCH", payload: data };
};
