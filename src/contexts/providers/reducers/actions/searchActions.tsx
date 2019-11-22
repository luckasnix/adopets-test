import * as searchTypes from './types/searchTypes'

export function updateSexParam(sex: string) {
  return {
    type: searchTypes.UPDATE_SEX_PARAM,
    payload: {
      sexKey: sex
    }
  }
}

export function updateSizeParam(size: string) {
  return {
    type: searchTypes.UPDATE_SIZE_PARAM,
    payload: {
      sizeKey: size
    }
  }
}

export function updateAgeParam(age: string) {
  return {
    type: searchTypes.UPDATE_AGE_PARAM,
    payload: {
      ageKey: age
    }
  }
}