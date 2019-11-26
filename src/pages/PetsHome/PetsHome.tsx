import React, { useContext, useState, useEffect, useCallback } from 'react'
import { RouteComponentProps, useLocation } from 'react-router-dom'
import PetsHeader from '../../ui/PetsHeader/PetsHeader'
import PetsParams from './containers/PetsParams/PetsParams'
import PetsData from './containers/PetsData/PetsData'
import PetsPages from './containers/PetsPages/PetsPages'
import SearchContext from '../../contexts/SearchContext'
import styles from './PetsHome.module.css'

const PetsHome: React.FunctionComponent<RouteComponentProps> = (props) => {
  // accessing context to get the search object
  const { searchState } = useContext(SearchContext)
  // accessing location object
  let location = useLocation()
  // state to store the data fetched from server
  const [fetchedData, setFetchedData] = useState<any>(null)
  // asynchronous function to accessing the api
  const petSearch = useCallback(
    async(token: string, body: any) => {
      await fetch(
        'https://test.adopets.app/v1/pet/search',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(body)
        }
      )
      .then(
        (res: Response) => {
          return res.json()
        }
      )
      .then(
        (res: any) => {
          // storing the fetched data on own state
          setFetchedData(res.data)
        }
      )
    },
    []
  )
  useEffect(
    () => {
      console.log('Segunda chave:', location.state.accessKey)
      // reacting to search object updates and sending it to the server in every change
      petSearch(location.state.accessKey, searchState)
    },
    [searchState, petSearch, location]
  )
  return (
    <>
      <PetsHeader/>
      <div className={styles.page}>
        <PetsParams/>
        <PetsData data={fetchedData} />
        <PetsPages data={fetchedData} />
      </div>
    </>
  )
}

export default PetsHome