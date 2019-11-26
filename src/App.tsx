import React, { Suspense, lazy } from 'react'
import SearchProvider from './contexts/providers/SearchProvider'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PetsLoader from './ui/PetsLoader/PetsLoader'

// lazy import to react pages
const PetsMain = lazy(() => import('./pages/PetsMain/PetsMain'))
const PetsHome = lazy(() => import('./pages/PetsHome/PetsHome'))

const App: React.FunctionComponent = () => {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Suspense fallback={<PetsLoader/>}>
          <Switch>
            <Route path='/home' component={PetsHome} />
            <Route component={PetsMain} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </SearchProvider>
  )
}

export default App