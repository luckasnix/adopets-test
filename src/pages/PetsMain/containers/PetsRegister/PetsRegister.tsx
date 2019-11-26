import React, { useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import PetsInput from './components/PetsInput'
import styles from './PetsRegister.module.css'

// data to pre-filled registration
const userEmail = 'usuario-test@adopets.com'
const userPassword = '123123'

const PetsRegister: React.FunctionComponent<any> = (props) => {
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
          // navigating to home page after get the new access key
          props.history.push('/home', { accessKey: res.data.access_key })
        }
      )
    },
    [props.history]
  )
  // function to register the user
  const handleUserSignIn = useCallback(
    (evt: React.FormEvent) => {
      evt.preventDefault()
      registerUser(props.token)
    },
    [registerUser, props.token]
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