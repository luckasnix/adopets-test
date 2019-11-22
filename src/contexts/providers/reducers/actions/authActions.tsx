import * as authTypes from './types/authTypes'

export function createAccessKey(key: string) {
  return {
    type: authTypes.CREATE_ACCESS_KEY,
    payload: { key }
  }
}

export function createBearerToken(token: string) {
  return {
    type: authTypes.CREATE_BEARER_TOKEN,
    payload: { token }
  }
}