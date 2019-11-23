import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PetsParams from './containers/PetsParams/PetsParams'
import styles from './PetsHome.module.css'

const PetsHome: React.FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <div className={styles.page}>
      <PetsParams token={props.location.state.accessKey}/>
    </div>
  )
}

export default PetsHome