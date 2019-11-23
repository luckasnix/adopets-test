import React, { useState, useCallback, useContext } from 'react'
import PetsSelect from './components/PetsSelect'
import SearchContext from '../../../../contexts/SearchContext'
import * as searchActions from '../../../../contexts/providers/reducers/actions/searchActions'

const PetsParams: React.FunctionComponent<any> = (props) => {
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
      <PetsSelect
        id='sex-select'
        label='Sex: '
        value={sex}
        changed={handleSexChange}
        options={[
          {value: 'ALL', displayedValue: 'All'},
          {value: 'MALE', displayedValue: 'Male'},
          {value: 'FEMALE', displayedValue: 'Female'}
        ]}
      />
      <PetsSelect
        id='size-select'
        label='Size: '
        value={size}
        changed={handleSizeChange}
        options={[
          {value: 'ALL', displayedValue: 'All'},
          {value: 'S', displayedValue: 'Small'},
          {value: 'M', displayedValue: 'Medium'},
          {value: 'L', displayedValue: 'Large'},
          {value: 'XL', displayedValue: 'Extra Large'}
        ]}
      />
      <PetsSelect
        id='age-select'
        label='Age: '
        value={age}
        changed={handleAgeChange}
        options={[
          {value: 'ALL', displayedValue: 'All'},
          {value: 'BABY', displayedValue: 'Baby'},
          {value: 'YOUNG', displayedValue: 'Young'},
          {value: 'ADULT', displayedValue: 'Adult'},
          {value: 'SENIOR', displayedValue: 'Senior'}
        ]}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default PetsParams