import React from 'react'

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
    return <h1>Nenhum dado a ser exibido</h1>
  } else {
    return (
      <ul>
        {
          props.data.map((cur) => {
            return (
              <li key={cur.id}>{cur.name}</li>
            )
          })
        }
      </ul>
    )
  }
}

export default PetsData