import React, { useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import PetsInput from './components/PetsInput'
import styles from './PetsRegister.module.css'

const userEmail = 'usuario-test@adopets.com'
const userPassword = '123123'

const PetsRegister: React.FunctionComponent<any> = (props) => {
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
          console.log('Primeiro then')
          return res.json()
        }
      )
      .then(
        (res: any) => {
          console.log('Segundo then')
          console.log(res)
          props.history.push('/home', { accessKey: res.data.access_key })
        }
      )
    },
    [props.history]
  )
  const handleUserSignIn = useCallback(
    (evt: React.FormEvent) => {
      console.log('Form submit')
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