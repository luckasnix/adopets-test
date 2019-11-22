import React from 'react'
import PetsForm from './containers/PetsForm'
import styles from './PetsHome.module.css'

const PetsHome: React.FunctionComponent = () => {
  async function registerUser(token: string) {
    await fetch(
      'https://test.adopets.app/v1/auth/session-register',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ 'organization_user': { 'email':'usuario-test@adopets.com', 'password': '123123' } })
      }
    )
    .then(
      (res) => {
        return res.json()
      }
    )
    .then(
      (res) => {
        console.log(res.data.access_key)
      }
    )
  }
  return (
    <div className={styles.page}>
      <PetsForm/>
    </div>
  )
}

export default PetsHome