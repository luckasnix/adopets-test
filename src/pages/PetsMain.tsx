import React, { useEffect } from 'react'
import PetsHeader from './containers/PetsHeader'

const PetsMain: React.FunctionComponent = () => {
  async function fetchAccessKey() {
    await fetch(
      'https://test.adopets.app/v1/auth/session-request',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(
          {
            system_api_key: '4bdafbc5-c2cb-4a5a-8932-3bd929de4f18'
          }
        )
      }
    )
    .then(
      (res: Response) => {
        return res.json()
      }
    )
    .then(
      (res: any) => {
        console.log(res.data.access_key)
      }
    )
  }
  useEffect(
    () => {
      fetchAccessKey()
    },
    []
  )
  return (
    <>
      <PetsHeader/>
    </>
  )
}

export default PetsMain