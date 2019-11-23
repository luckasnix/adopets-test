import React from 'react'
import styles from './PetsInput.module.css'

interface Input {
  id: string;
  type: string;
  label: string;
  value: string;
}

const PetsInput: React.FunctionComponent<Input> = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <br/>
      <input id={props.id} type={props.type} defaultValue={props.value} />
    </div>
  )
}

export default PetsInput