import React, { useState, useEffect, useCallback } from 'react'
import PetsRegister from './containers/PetsRegister/PetsRegister'
import PetsHeader from '../../ui/PetsHeader/PetsHeader'
import PetsLoader from '../../ui/PetsLoader/PetsLoader'
import styles from './PetsMain.module.css'

const apiKey: string = '4bdafbc5-c2cb-4a5a-8932-3bd929de4f18'

const PetsMain: React.FunctionComponent = () => {
  // state to show the loader depending on the boolean status
  const [isLoading, setIsLoading] = useState<boolean>(true)
  // asynchronous function to accessing the api
  const fetchAccessKey = useCallback(
    async() => {
      await fetch(
        'https://test.adopets.app/v1/auth/session-request',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify( { system_api_key: apiKey })
        }
      )
      .then(
        (res: Response) => {
          return res.json()
        }
      )
      .then(
        (res: any) => {
          // setting access key in local storage
          localStorage.setItem('accessKey', res.data.access_key)
          // setting 'loading' state to 'false'
          setIsLoading(false)
        }
      )
    },
    []
   )
  useEffect(
    () => {
      // getting access key from local storage
      let accessKey: string | null = localStorage.getItem('accessKey')
      if(!accessKey) {
        // fetching data if there are no access key
        fetchAccessKey()
      }
    },
    [fetchAccessKey]
  )
  return (
    <>
      <PetsHeader/>
      <div className={styles.page}>
        {isLoading ? <PetsLoader/> : <PetsRegister/>}
      </div>
    </>
  )
}

export default PetsMain