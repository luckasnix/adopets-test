import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PetsParams from './containers/PetsParams/PetsParams'
import PetsHeader from '../../ui/PetsHeader/PetsHeader'
import styles from './PetsHome.module.css'

const PetsHome: React.FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <>
      <PetsHeader/>
      <div className={styles.page}>
        <PetsParams token={props.location.state.accessKey}/>
      </div>
    </>
  )
}

export default PetsHome