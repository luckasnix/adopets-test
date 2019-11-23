import React, { useState, useEffect, useCallback } from 'react'
import PetsRegister from './containers/PetsRegister/PetsRegister'
import PetsHeader from '../../ui/PetsHeader/PetsHeader'
import PetsLoader from '../../ui/PetsLoader/PetsLoader'
import styles from './PetsMain.module.css'

const apiKey: string = '4bdafbc5-c2cb-4a5a-8932-3bd929de4f18'

const PetsMain: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [accessKey, setAccessKey] = useState<string>('')
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
        (res: Response) => res.json()
      )
      .then(
        (res: any) => {
          setAccessKey(res.data.access_key)
        }
      )
    },
    []
   )
  useEffect(() => { fetchAccessKey() }, [])
  useEffect(
    () => {
      if(accessKey.length) {
        setIsLoading(false)
      }
    },
    [accessKey]
  )
  return (
    <>
      <PetsHeader/>
      <div className={styles.page}>
        {isLoading ? <PetsLoader/> : <PetsRegister token={accessKey}/>}
      </div>
    </>
  )
}

export default PetsMain