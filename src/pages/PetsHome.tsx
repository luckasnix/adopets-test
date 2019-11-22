import React from 'react'
import PetsForm from './containers/PetsForm'
import styles from './PetsHome.module.css'

const PetsHome: React.FunctionComponent = () => {
  return (
    <div className={styles.page}>
      <PetsForm/>
    </div>
  )
}

export default PetsHome