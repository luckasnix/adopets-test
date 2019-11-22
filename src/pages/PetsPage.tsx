import React, { useEffect } from 'react'
import PetsHeader from './containers/PetsHeader'
import styles from './PetsPage.module.css'

const petSeachObj = {
  'search': {
    'age_key': 'YOUNG',
    '_fields': ['id', 'uuid', 'custom_code', 'name', 'specie_id', 'breed_primary_id', 'price', 'created_date', 'status_key', 'branch_id', 'payment_model_key', 'sex_key', 'size_key', 'age_key'],
    'specie': {
      'with': {
        '_fields': ['id', 'name']
      }
    },
    'breed_primary': {
      'with': {
        '_fields': ['id', 'name']
      }
    },
    'branch': {
      'with': {
        'uuid' : 'ef71cadf-fa9b-4c8b-a1a8-0e31e784c3ff',
        '_fields': ['id', 'uuid']
      }
    }
  },
  'options': {
      'page': 1,
      'limit': 5,
      'sort': []
  }
}

const Pets: React.FunctionComponent = () => {
  async function sessionRequest() {
    await fetch(
      'https://test.adopets.app/v1/auth/session-request',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ system_api_key: '4bdafbc5-c2cb-4a5a-8932-3bd929de4f18' })
      }
    )
    .then(res => {
      return res.json()
    })
    .then(res => {
      sessionRegister(res.data.access_key)
    })
  }
  async function sessionRegister(token: string) {
    await fetch(
      'https://test.adopets.app/v1/auth/session-register',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ 'organization_user': { 'email':'usuario-test@adopets.com', 'password': '123123' } })
      }
    )
    .then(res => {
      return res.json()
    })
    .then(res => {
      petSearch(res.data.access_key)
    })
  }
  async function petSearch(token: string) {
    await fetch(
      'https://test.adopets.app/v1/pet/search',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(petSeachObj)
      }
    )
    .then(res => {
      return res.json()
    })
    .then(res => {
      console.log(res)
    })
  }
  useEffect(() => {
    sessionRequest()
  }, [])
  return (
    <div className={styles.page}>
      <PetsHeader/>
    </div>
  )
}

export default Pets