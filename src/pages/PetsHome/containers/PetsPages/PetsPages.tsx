import React from 'react'
import styles from './PetsPages.module.css'

interface Data {
  data: {
    count: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
    result: {
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
  };
  clicked: any;
}

const PetsPages: React.FunctionComponent<Data | null> = (props) => {
  if(props.data === null || props.data.pages === 0) {
    return null
  } else {
    let pageList = []
    for(let idx = 1; idx <= props.data.pages; idx++) {
      pageList.push(
        <li
          key={idx}
          className={props.data.page === idx ? styles.active : ''}
          onClick={props.clicked}
        >{idx}</li>
      )
    }
    return (
      <ul className={styles.list}>
        {pageList}
      </ul>
    )
  }
}

export default PetsPages