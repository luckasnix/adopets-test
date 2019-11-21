import * as sessionTypes from './types/sessionTypes'

export function toogleToken(token: string) {
  return {
    type: sessionTypes.TOOGLE_TOKEN,
    payload: { token }
  }
}