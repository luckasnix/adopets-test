import React, { useEffect, useContext } from 'react'
import SessionContext from '../contexts/SessionContext'
import * as sessionActions from '../contexts/providers/reducers/actions/sessionActions'

const Pets: React.FC = () => {
  const { dispatch } = useContext(SessionContext)
  async function sessionRequest() {
    await fetch(
      'https://test.adopets.app/v1/auth/session-request',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ system_api_key: '4bdafbc5-c2cb-4a5a-8932-3bd929de4f18' })
      }
    )
    .then(res => {
      return res.json()
    })
    .then(res => {
      sessionRegister(res.data.access_key)
      dispatch(sessionActions.toogleToken(res.data.access_key))
    })
  }
  async function sessionRegister(token: string) {
    await fetch(
      'https://test.adopets.app/v1/auth/session-register',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ 'organization_user': { 'email':'usuario-test@adopets.com', 'password': '123123' } })
      }
    )
    .then(res => {
      return res.json()
    })
    .then(res => {
      console.log(res)
    })
  }
  useEffect(() => {
    sessionRequest()
  }, [])
  return <h1>Teste da Adopets</h1>
}

export default Pets