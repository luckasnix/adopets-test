import React, { useReducer } from 'react'
import AuthContext from '../AuthContext'
import authReducer from './reducers/authReducer'

interface Auth {
  children: React.ReactNode
}

const initialState = {
  accessKey: '',
  bearerToken: ''
}

const AuthProvider: React.FunctionComponent<Auth> = (props) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState)
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider