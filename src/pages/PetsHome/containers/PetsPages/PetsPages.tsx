import React from 'react'

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
}

const PetsPages: React.FunctionComponent<Data | null> = (props) => {
  if(props.data === null || props.data.pages === 0) {
    return (
      <div>
        <p>No pages</p>
      </div>
    )
  } else {
    let pageList = []
    for(let idx = 1; idx <= props.data.pages; idx++) {
      if(props.data.page === idx) {
        pageList.push(<li key={idx}>Página atual {idx}</li>)
      } else {
        pageList.push(<li key={idx}>Página {idx}</li>)
      }
    }
    return (
      <ul>
        {pageList}
      </ul>
    )
  }
}

export default PetsPages