import React, { Suspense, lazy } from 'react'
import SearchProvider from './contexts/providers/SearchProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PetsHeader from './pages/containers/PetsHeader'
import Loader from './ui/Loader'

const PetsMain = lazy(() => import('./pages/PetsMain'))
const PetsRegister = lazy(() => import('./pages/PetsRegister'))
const PetsHome = lazy(() => import('./pages/PetsHome'))

const App: React.FunctionComponent = () => {
  return (
    <SearchProvider>
      <Router>
        <PetsHeader/>
        <Suspense fallback={<Loader/>}>
          <Switch>
            <Route path='/register' component={PetsRegister} />
            <Route path='/home' component={PetsHome} />
            <Route component={PetsMain} />
          </Switch>
        </Suspense>
      </Router>
    </SearchProvider>
  )
}

export default App