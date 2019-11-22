import React, { useReducer, ReactNode } from 'react'
import SessionContext from '../SessionContext'
import sessionReducer from './reducers/sessionReducer'

interface SessionProviderProps {
  children: ReactNode;
}

const SessionProvider: React.FC<SessionProviderProps> = (props) => {
  const [state, dispatch] = useReducer(sessionReducer, { token: '' })
  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SessionContext.Provider>
  )
}

export default SessionProvider