import React, { useReducer } from 'react'
import SearchContext from '../SearchContext'
import searchReducer from './reducers/searchReducer'

interface SearcProviderProps {
  children: React.ReactNode;
}

const initialState = {
  search: {
    _fields: ['id', 'uuid', 'custom_code', 'name', 'specie_id', 'breed_primary_id', 'price', 'created_date', 'status_key', 'branch_id', 'payment_model_key', 'sex_key', 'size_key', 'age_key'],
    specie: {
      with: {
        _fields: ['id', 'name']
      }
    },
    breed_primary: {
      with: {
        _fields: ['id', 'name']
      }
    },
    branch: {
      with: {
        uuid: 'ef71cadf-fa9b-4c8b-a1a8-0e31e784c3ff',
        _fields: ['id', 'uuid']
      }
    }
  },
  options: {
      page: 1,
      limit: 5,
      sort: []
  }
}

const SearcProvider: React.FunctionComponent<SearcProviderProps> = (props) => {
  const [searchState, searchDispatch] = useReducer(searchReducer, initialState)
  return (
    <SearchContext.Provider value={{ searchState, searchDispatch }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearcProvider