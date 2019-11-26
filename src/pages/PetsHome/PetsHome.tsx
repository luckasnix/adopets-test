import React, { useContext, useState, useEffect, useCallback } from 'react'
import PetsHeader from '../../ui/PetsHeader/PetsHeader'
import PetsExit from './containers/PetsExit/PetsExit'
import PetsParams from './containers/PetsParams/PetsParams'
import PetsData from './containers/PetsData/PetsData'
import PetsPages from './containers/PetsPages/PetsPages'
import SearchContext from '../../contexts/SearchContext'
import styles from './PetsHome.module.css'

const PetsHome: React.FunctionComponent = () => {
  // accessing context to get the search object
  const { searchState } = useContext(SearchContext)
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
      // getting session key from local storage
      let sessionKey: string | null = localStorage.getItem('sessionKey')
      // reacting to search object updates and sending it to the server in every change
      if(sessionKey) {
        petSearch(sessionKey, searchState)
      }
    },
    [petSearch, searchState]
  )
  return (
    <>
      <PetsHeader/>
      <div className={styles.page}>
        <PetsExit/>
        <PetsParams/>
        <PetsData data={fetchedData} />
        <PetsPages data={fetchedData} />
      </div>
    </>
  )
}

export default PetsHome