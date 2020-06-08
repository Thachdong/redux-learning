import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAIL} from './actionsType'
import axios from 'axios';

export const fetchPostRequest = () => ({
  type: FETCH_POST_REQUEST
})

export const fetchPostSuccess = posts => ({
  type: FETCH_POST_SUCCESS,
  posts
})

export const fetchPostFail = error => ({
  type: FETCH_POST_FAIL,
  error
})

export const fetchPostImplement = () => {
  return async dispatch => {
    try {
      dispatch(fetchPostRequest())
      const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch(fetchPostSuccess(posts.data));
    } catch (error) {
      dispatch(fetchPostFail(error.message))
    }
  }
}