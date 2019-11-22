import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PetsHeader from './containers/PetsHeader'

const PetsRegister = lazy(() => import('./PetsRegister'))
const PetsHome = lazy(() => import('./PetsHome'))

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
    .then((res: Response) => res.json())
    .then((res: any) => { console.log(res.data.access_key) })
  }
  useEffect(
    () => {
      fetchAccessKey()
    },
    []
  )
  return (
    <Router>
      <PetsHeader/>
      <Suspense fallback={<h1>Carregando...</h1>}>
        <Switch>
          <Route path='/home' component={PetsHome} />
          <Route component={PetsRegister} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default PetsMain