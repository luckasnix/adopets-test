import React, { useCallback } from 'react'
import styles from './PetsRegister.module.css'

const userEmail = 'usuario-test@adopets.com'
const userPassword = '123123'

const PetsRegister = () => {
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
      .then((res: Response) => res.json())
      .then((res: any) => { console.log(res.data.access_key) })
    },
    []
  )
  const handleUserSignIn = useCallback(
    (evt: React.FormEvent) => {
      evt.preventDefault()
      registerUser('token')
    },
    [registerUser]
  )
  return (
    <div className={styles.page}>
      <form onSubmit={handleUserSignIn}>
        <div>
          <label htmlFor='input-email'>E-mail: </label>
          <input id='input-email' type='email' defaultValue={userEmail} />
        </div>
        <div>
          <label htmlFor='input-password'>Password: </label>
          <input id='input-password' type='password' defaultValue={userPassword} />
        </div>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default PetsRegister