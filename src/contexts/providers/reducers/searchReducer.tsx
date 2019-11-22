import * as searchTypes from './actions/types/searchTypes'

interface State {
  search: {
    sex_key?: string;
    size_key?: string;
    age_key?: string;
    _fields: string[];
    specie: {
      with: {
        _fields: string[];
      };
    };
    breed_primary: {
      with: {
        _fields: string[];
      };
    };
    branch: {
      with: {
        uuid: string;
        _fields: string[];
      };
    };
  };
  options: {
    page: number;
    limit: number;
    sort: string[];
  };
}

interface Action {
  type: string;
  payload: {
    sexKey?: string;
    sizeKey?: string;
    ageKey?: string;
  }
}

function searchReducer(state: State, action: Action) {
  switch(action.type) {
    case searchTypes.UPDATE_SEX_PARAM:
      if(action.payload.sexKey === 'ALL') {
        return state
      } else {
        return {...state, sex_key: action.payload.sexKey }
      }
    case searchTypes.UPDATE_SIZE_PARAM:
      if(action.payload.sizeKey === 'ALL') {
        return state
      } else {
        return {...state, size_key: action.payload.sizeKey }
      }
    case searchTypes.UPDATE_AGE_PARAM:
      if(action.payload.ageKey === 'ALL') {
        return state
      } else {
        return {...state, age_key: action.payload.ageKey }
      }
    default:
      return state
  }
}

export default searchReducer