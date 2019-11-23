import React, { useState, useCallback, useContext } from 'react'
import SearchContext from '../../contexts/SearchContext'
import * as searchActions from '../../contexts/providers/reducers/actions/searchActions'

const PetsForm: React.FunctionComponent<any> = (props) => {
  const { searchState, searchDispatch } = useContext(SearchContext)
  // sex selection
  const [sex, setSex] = useState<string>('ALL')
  const handleSexChange = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      setSex(evt.target.value)
      searchDispatch(searchActions.updateSexParam(evt.target.value))
    },
    [setSex, searchDispatch]
  )
  // size selection
  const [size, setSize] = useState<string>('ALL')
  const handleSizeChange = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      setSize(evt.target.value)
      searchDispatch(searchActions.updateSizeParam(evt.target.value))
    },
    [setSize, searchDispatch]
  )
  // age selection
  const [age, setAge] = useState<string>('ALL')
  const handleAgeChange = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      setAge(evt.target.value)
      searchDispatch(searchActions.updateAgeParam(evt.target.value))
    },
    [setAge, searchDispatch]
  )
  // submit form
   const petSearch = useCallback(
    async(token: string) => {
      await fetch(
        'https://test.adopets.app/v1/pet/search',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(searchState)
        }
      )
      .then((res: Response) => res.json())
      .then((res: any) => { console.log(res) })
    },
    [searchState]
   )
  const handleSearch = useCallback(
    (evt: React.FormEvent) => {
      evt.preventDefault()
      petSearch(props.token)
      console.log(searchState)
    },
    [props.token]
  )
  return (
    <form onSubmit={handleSearch}>
      <div>
        <label htmlFor='sex-select'>Sex: </label>
        <select id='sex-select' value={sex} onChange={handleSexChange}>
          <option value='ALL'>All</option>
          <option value='MALE'>Male</option>
          <option value='FEMALE'>Female</option>
        </select>
      </div>
      <div>
        <label htmlFor='size-select'>Size: </label>
        <select id='size-select' value={size} onChange={handleSizeChange}>
          <option value='ALL'>All</option>
          <option value='S'>Small</option>
          <option value='M'>Medium</option>
          <option value='L'>Large</option>
          <option value='XL'>Extra Large</option>
        </select>
      </div>
      <div>
        <label htmlFor='age-select'>Age: </label>
        <select id='age-select' value={age} onChange={handleAgeChange}>
          <option value='ALL'>All</option>
          <option value='BABY'>Baby</option>
          <option value='YOUNG'>Young</option>
          <option value='ADULT'>Adult</option>
          <option value='SENIOR'>Senior</option>
        </select>
      </div>
      <button type='submit'>Search</button>
    </form>
  )
}

export default PetsForm