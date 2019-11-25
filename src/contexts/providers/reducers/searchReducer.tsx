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
    pageKey?: number;
  }
}

function searchReducer(state: State, action: Action) {
  switch(action.type) {
    case searchTypes.UPDATE_SEX_PARAM:
      // copying the state to overwrite it with new state
      let sexState = {...state}
      sexState.search = {...state.search}
      // if 'sexKey' is equal to 'all', we shouldn't write it in the state
      if(action.payload.sexKey === 'ALL') {
        if(sexState.search.sex_key) {
          // if the 'sex_key' key already exists in the state, we should delete it
          delete sexState.search.sex_key
        }
        // we should return a new state to overwrite the old state
        return sexState
      } else {
        // if 'sexKey' is not equal to 'all', we should write it in the state
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
    case searchTypes.UPDATE_PAGE_PARAM:
      let pageState = {...state}
      pageState.options = {...state.options}
      if (action.payload.pageKey) {
        pageState.options.page = action.payload.pageKey
      }
      return pageState
    default:
      return state
  }
}

export default searchReducer