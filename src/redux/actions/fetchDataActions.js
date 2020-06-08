import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from "./actionsType";
import axios from "axios";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (users) => ({
  type: FETCH_DATA_SUCCESS,
  users,
});

export const fetchDataFail = (error) => ({
  type: FETCH_DATA_FAIL,
  error,
});

export const fetchDataImplement = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataRequest());
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(fetchDataSuccess(result.data));
    } catch (error) {
      dispatch(fetchDataFail(error));
    }
  };
};
