import React from 'react'
import PetsForm from './containers/PetsForm'
import { RouteComponentProps } from 'react-router-dom'
import styles from './PetsHome.module.css'

const PetsHome: React.FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <div className={styles.page}>
      <PetsForm token={props.location.state.accessKey}/>
    </div>
  )
}

export default PetsHome