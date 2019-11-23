import React from 'react'
import styles from './PetsHeader.module.css'
import { ReactComponent as AdopetsLogo } from '../../assets/images/adopets-logo.svg'

const PetsHeader: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <AdopetsLogo/>
      </div>
    </header>
  )
}

export default PetsHeader