const initState = {
  isLoading: false,
  users: [],
  error: ""
}
const users = (state = initState , action) => {
  switch(action.type) {
    case "FETCH_DATA_REQUEST":
      return {...state, isLoading: true}
    case "FETCH_DATA_SUCCESS":
      return {
        users: action.users,
        isLoading: false,
        error: ""
      }
    case "FETCH_DATA_FAIL":
      return {
        isLoading: false,
        users: [],
        error: action.error
      }
    default:
      return state
  }
}

export default users