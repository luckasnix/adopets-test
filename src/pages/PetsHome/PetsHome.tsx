import React, { useState, useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PetsHeader from '../../ui/PetsHeader/PetsHeader'
import PetsParams from './containers/PetsParams/PetsParams'
import PetsData from './containers/PetsData/PetsData'
import PetsPages from './containers/PetsPages/PetsPages'
import styles from './PetsHome.module.css'

const PetsHome: React.FunctionComponent<RouteComponentProps> = (props) => {
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
  return (
    <>
      <PetsHeader/>
      <div className={styles.page}>
        <PetsParams
          searched={petSearch}
          token={props.location.state.accessKey}
        />
        <PetsData data={fetchedData}/>
        <PetsPages
          data={fetchedData}
          token={props.location.state.accessKey}
          clicked={() => { console.log('Clicou') }}
        />
      </div>
    </>
  )
}

export default PetsHome