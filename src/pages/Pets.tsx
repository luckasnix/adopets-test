import React, { useEffect } from 'react'

function Pets() {
  async function sessionRequest() {
    await fetch(
      'https://test.adopets.app/v1/auth/session-request',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ system_api_key: '4bdafbc5-c2cb-4a5a-8932-3bd929de4f18' })
      }
    ).then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res.data.access_key)
      })
  }
  useEffect(() => {
    sessionRequest()
  }, [])
  return <h1>Teste da Adopets</h1>
}

export default Pets