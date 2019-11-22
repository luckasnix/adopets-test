import * as authTypes from './actions/types/authTypes'

interface State {
  accessKey: string;
  bearerToken: string;
}

interface Action {
  type: string;
  payload: {
    key?: string;
    token?: string;
  }
}

function authReducer(state: State, action: Action) {
  switch(action.type) {
    case authTypes.CREATE_ACCESS_KEY:
      return { ...state, accessKey: action.payload.key }
    case authTypes.CREATE_BEARER_TOKEN:
      return {...state, bearerToken: action.payload.token}
    default:
      return state
  }
}

export default authReducer