import * as types from "./constants"

const initialState = { registration: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE:
    case types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE_SUCCEEDED:
    case types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        registration: [...state.registration, action.response]
      })
    default:
      return state
  }
}
