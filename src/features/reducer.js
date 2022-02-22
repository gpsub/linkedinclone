import userReducer from './userSlice'

export default function rootReducer(state = {}, action) {
  // always return a new object for the root state
  return {
    // the value of `state.todos` is whatever the todos reducer returns
    user: userReducer(state.user, action),
      }
}