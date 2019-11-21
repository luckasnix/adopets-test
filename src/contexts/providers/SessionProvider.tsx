import React, { useReducer } from 'react'
import SessionContext from '../SessionContext'
import sessionReducer from './reducers/sessionReducer'

interface prosIntf {
  children: any;
}

function SessionProvider(props: prosIntf) {
  const [state, dispatch] = useReducer(sessionReducer, { token: '' })
  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SessionContext.Provider>
  )
}

export default SessionProvider