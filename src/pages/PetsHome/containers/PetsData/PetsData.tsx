import React from 'react'
import styles from './PetsData.module.css'

interface Data {
  data: {
    id: number;
    uuid: string;
    name: string;
    sex_key: string;
    size_key: string;
    age_key: string;
    price: string;
    payment_model_key: string;
    status_key: string;
    created_date: string;
    custom_code: string | null;
    branch_id: number;
    branch: {
      id: number;
      uuid: string;
    };
    breed_primary_id: number;
    breed_primary: {
      id: number;
      name: string;
    };
    specie_id: number;
    specie: {
      id: number;
      name: string;
    };
  }[];
}

const PetsData: React.FunctionComponent<Data | null> = (props) => {
  if(props.data === null || props.data.length === 0) {
    return (
      <div className={styles.noList}>
        <p>No data to display</p>
      </div>
    )
  } else {
    return (
      <ul className={styles.list}>
        {
          props.data.map((cur) => {
            return (
              <li key={cur.id}>
                <p><strong>{cur.name}</strong></p>
                <p>{cur.breed_primary.name}</p>
                <p>$ {cur.price}</p>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default PetsData