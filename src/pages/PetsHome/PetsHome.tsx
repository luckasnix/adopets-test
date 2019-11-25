import React, { useState, useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PetsParams from './containers/PetsParams/PetsParams'
import PetsHeader from '../../ui/PetsHeader/PetsHeader'
import PetsData from './containers/PetsData/PetsData'
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
          console.log(res.data.result)
          setFetchedData(res.data.result)
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
          search={petSearch}
          token={props.location.state.accessKey}
        />
        <PetsData data={fetchedData}/>
      </div>
    </>
  )
}

export default PetsHome