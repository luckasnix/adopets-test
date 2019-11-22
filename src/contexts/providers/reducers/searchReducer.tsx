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
    sex: string;
    size: string;
    age: string;
  }
}

function searchReducer(state: State, action: Action) {
  switch(action.type) {
    case searchTypes.UPDADE_SEARCH_PARAMS:
      let searchParams = {}
      if(action.payload.sex !== 'ALL') {
        searchParams = {...searchParams, sex_key: action.payload.sex }
      }
      if(action.payload.size !== 'ALL') {
        searchParams = {...searchParams, size_key: action.payload.size }
      }
      if(action.payload.age !== 'ALL') {
        searchParams = {...searchParams, age_key: action.payload.age }
      }
      return { ...state, ...searchParams }
    default:
      return state
  }
}

export default searchReducer