import * as sessionTypes from './actions/types/sessionTypes'

interface stateIntf {
  token: string;
}

interface actionIntf {
  type: string;
  payload: {
    token: string;
  }
}

function sessionReducer(state: stateIntf, action: actionIntf) {
  switch(action.type) {
    case sessionTypes.TOOGLE_TOKEN:
      return { ...state, token: action.payload.token }
    default:
      return state
  }
}

export default sessionReducer