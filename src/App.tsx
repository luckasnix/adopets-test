import React, { Suspense, lazy } from 'react'
import SearchProvider from './contexts/providers/SearchProvider'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PetsLoader from './ui/PetsLoader/PetsLoader'

// lazy import to react pages
const PetsMain = lazy(() => import('./pages/PetsMain/PetsMain'))
const PetsHome = lazy(() => import('./pages/PetsHome/PetsHome'))

// function to test authentication status
const isAuthenticated: () => boolean = () => {
  // user only has a session key if he is authenticated
  let sessionKey: string | null = localStorage.getItem('sessionKey')
  if(sessionKey) {
    return true
  } else {
    return false
  }
}

// protected route component
const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest} render={
        (props) => {
          return isAuthenticated() ? (
            <Component {...props}/>
            ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
            )
        }
      }
    />
  )
}

const App: React.FunctionComponent = () => {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Suspense fallback={<PetsLoader/>}>
          <Switch>
            <ProtectedRoute path='/home' component={PetsHome} />
            <Route component={PetsMain} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </SearchProvider>
  )
}

export default App