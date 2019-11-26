import React, { useCallback } from 'react'
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom'
import PetsInput from './components/PetsInput'
import styles from './PetsRegister.module.css'

// data to pre-filled registration
const userEmail = 'usuario-test@adopets.com'
const userPassword = '123123'

const PetsRegister: React.FunctionComponent<RouteComponentProps> = (props) => {
  // accessing history object
  let history = useHistory()
  // asynchronous function to accessing the api
  const registerUser = useCallback(
    async (token: string) => {
      await fetch(
        'https://test.adopets.app/v1/auth/session-register',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(
            { organization_user: { email: userEmail, password: userPassword } }
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
          // setting access key in local storage
          localStorage.setItem('sessionKey', res.data.access_key)
          // navigating to home page after get the new access key
          history.replace('/home')
        }
      )
    },
    [history]
  )
  // function to register the user
  const handleUserSignIn = useCallback(
    (evt: React.FormEvent) => {
      evt.preventDefault()
      let accessKey: string | null = localStorage.getItem('accessKey')
      if(accessKey) {
        registerUser(accessKey)
      }
    },
    [registerUser]
  )
  return (
    <div className={styles.page}>
      <form onSubmit={handleUserSignIn}>
        <PetsInput id='input-email' type='email' label='E-mail:' value={userEmail}/>
        <PetsInput id='input-password' type='password' label='Password:' value={userPassword}/>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default withRouter(PetsRegister)