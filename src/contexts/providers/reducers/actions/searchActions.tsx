import * as searchTypes from './types/searchTypes'

interface Params {
  sex: string;
  size: string;
  age: string;
}

export function addSearchParams(params: Params) {
  return {
    type: searchTypes.UPDADE_SEARCH_PARAMS,
    payload: { params }
  }
}