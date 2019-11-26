import React, { useCallback } from 'react'
import { withRouter, useHistory, RouteComponentProps } from 'react-router-dom'
import styles from './PetsExit.module.css'

const PetsExit: React.FunctionComponent<RouteComponentProps> = () => {
  let history = useHistory()
  const handleExit = useCallback(
    () => {
      // removing session key stored in local storage
      localStorage.removeItem('sessionKey')
      // navigating to the root route
      history.replace('/')
    },
    [history]
  )
  return <button className={styles.exit} onClick={handleExit}>Exit</button>
}

export default withRouter(PetsExit)