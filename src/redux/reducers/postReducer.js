const initState = {
  isLoading: false,
  posts: [],
  error: ""
}

const posts = (state = initState, action) => {
  switch(action.type) {
    case "FETCH_POST_REQUEST":
      return {
        ...state,
        isLoading: true
      }
    case "FETCH_POST_SUCCESS":
      return {
        isLoading: false,
        posts: action.posts,
        error: ""
      }
    case "FETCH_POST_FAIL":
      return {
        isLoading: false,
        posts: [],
        error: action.error
      }
      default: return state
  }
}

export default posts