import React, { useContext, useState, useEffect, useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PetsHeader from '../../ui/PetsHeader/PetsHeader'
import PetsParams from './containers/PetsParams/PetsParams'
import PetsData from './containers/PetsData/PetsData'
import PetsPages from './containers/PetsPages/PetsPages'
import SearchContext from '../../contexts/SearchContext'
import styles from './PetsHome.module.css'

const PetsHome: React.FunctionComponent<RouteComponentProps> = (props) => {
  const { searchState } = useContext(SearchContext)
  const [fetchedData, setFetchedData] = useState<any>(null)
  const petSearch = useCallback(
    async(token: string, body: any) => {
      await fetch(
        'https://test.adopets.app/v1/pet/search',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(body)
        }
      )
      .then((res: Response) => res.json())
      .then(
        (res: any) => {
          setFetchedData(res.data)
        }
      )
    },
    []
  )
  useEffect(
    () => {
      console.log('Segunda chave:', props.location.state.accessKey)
      petSearch(props.location.state.accessKey, searchState)
    },
    [searchState, petSearch, props.location]
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