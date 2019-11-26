import React, { useState, useCallback, useContext } from 'react'
import PetsSelect from './components/PetsSelect'
import SearchContext from '../../../../contexts/SearchContext'
import * as searchActions from '../../../../contexts/providers/reducers/actions/searchActions'
import styles from './PetsParams.module.css'

const PetsParams: React.FunctionComponent = () => {
  // accessing the context to get the dispatch function
  const { searchDispatch } = useContext(SearchContext)
  // sex selection
  const [sex, setSex] = useState<string>('ALL')
  const handleSexChange = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      setSex(evt.target.value)
      // updating the search object stored in context
      searchDispatch(searchActions.updateSexParam(evt.target.value))
    },
    [setSex, searchDispatch]
  )
  // size selection
  const [size, setSize] = useState<string>('ALL')
  const handleSizeChange = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      setSize(evt.target.value)
      // updating the search object stored in context
      searchDispatch(searchActions.updateSizeParam(evt.target.value))
    },
    [setSize, searchDispatch]
  )
  // age selection
  const [age, setAge] = useState<string>('ALL')
  const handleAgeChange = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      setAge(evt.target.value)
      // updating the search object stored in context
      searchDispatch(searchActions.updateAgeParam(evt.target.value))
    },
    [setAge, searchDispatch]
  )
  // sort selection
  const [sort, setSort] = useState<string>('Random')
  const handleSortChange = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      setSort(evt.target.value)
      // updating the search object stored in context
      searchDispatch(searchActions.updateSortParam(evt.target.value))
    },
    [setSort, searchDispatch]
  )
  return (
    <form className={styles.form}>
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
      <PetsSelect
        id='sort-select'
        label='Sort: '
        value={sort}
        changed={handleSortChange}
        options={[
          {value: 'Random', displayedValue: 'Random'},
          {value: 'name', displayedValue: 'From A to Z'},
          {value: '-name', displayedValue: 'From Z to A'}
        ]}
      />
    </form>
  )
}

export default PetsParams