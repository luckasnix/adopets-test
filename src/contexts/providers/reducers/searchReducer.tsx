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
    sortKey?: string;
  }
}

function searchReducer(state: State, action: Action) {
  switch(action.type) {
    case searchTypes.UPDATE_SEX_PARAM:
      let sexState = {...state}
      sexState.search = {...state.search}
      if(action.payload.sexKey === 'ALL') {
        if(sexState.search.sex_key) {
          delete sexState.search.sex_key
        }
        return sexState
      } else {
        sexState.search.sex_key = action.payload.sexKey
        return sexState
      }
    case searchTypes.UPDATE_SIZE_PARAM:
      let sizeState = {...state}
      sizeState.search = {...state.search}
      if(action.payload.sizeKey === 'ALL') {
        if(sizeState.search.size_key) {
          delete sizeState.search.size_key
        }
        return sizeState
      } else {
        sizeState.search.size_key = action.payload.sizeKey
        return sizeState
      }
    case searchTypes.UPDATE_AGE_PARAM:
      let ageState = {...state}
      ageState.search = {...state.search}
      if(action.payload.ageKey === 'ALL') {
        if(ageState.search.age_key) {
          delete ageState.search.age_key
        }
        return ageState
      } else {
        ageState.search.age_key = action.payload.ageKey
        return ageState
      }
    case searchTypes.UPDATE_SORT_PARAM:
      let sortState = {...state}
      sortState.options = {...state.options}
      sortState.options.sort = [...state.options.sort]
      if(action.payload.sortKey === 'Random') {
        sortState.options.sort = []
      } else if(action.payload.sortKey) {
        if(sortState.options.sort.length > 0) {
          sortState.options.sort = []
        }
        sortState.options.sort.push(action.payload.sortKey)
      }
      return sortState
    default:
      return state
  }
}

export default searchReducer