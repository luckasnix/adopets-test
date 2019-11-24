import React, { useState, useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PetsParams from './containers/PetsParams/PetsParams'
import PetsHeader from '../../ui/PetsHeader/PetsHeader'
import styles from './PetsHome.module.css'

interface Data {
  status: number;
  code: number;
  message: string | null;
  data: {
    limit: number;
    count: number;
    offset: number;
    page: number;
    pages: number;
    return: {
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
}

const PetsHome: React.FunctionComponent<RouteComponentProps> = (props) => {
  const [data, setData] = useState<Data | null>(null)
  const petSearch = useCallback(
    async(token: string, body: any) => {
      await fetch(
        'https://test.adopets.app/v1/pet/search',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(body)
        }
      )
      .then((res: Response) => res.json())
      .then((res: any) => { console.log(res) })
    },
    []
  )
  return (
    <>
      <PetsHeader/>
      <div className={styles.page}>
        <PetsParams
          search={petSearch}
          token={props.location.state.accessKey}
        />
      </div>
    </>
  )
}

export default PetsHome