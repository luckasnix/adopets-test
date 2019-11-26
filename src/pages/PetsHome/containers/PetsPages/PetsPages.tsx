import React, { useContext, useCallback } from 'react'
import SearchContext from '../../../../contexts/SearchContext'
import * as searchActions from '../../../../contexts/providers/reducers/actions/searchActions'
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
}

const PetsPages: React.FunctionComponent<Data | null> = (props) => {
  // accessing the context to get the dispatch function
  const { searchDispatch } = useContext(SearchContext)
  const handlePageChange = useCallback(
    (pageNum) => {
      // updating the search object stored in context
      searchDispatch(searchActions.updatePageParam(pageNum))
    },
    [searchDispatch]
  )
  if(props.data === null || props.data.pages === 0) {
    // returning no components if there are no pages
    return null
  } else {
    // creating pages array
    let pageList = []
    for(let idx = 1; idx <= props.data.pages; idx++) {
      pageList.push(
        <li
          key={idx}
          // passing 'active' css class to current page
          className={props.data.page === idx ? styles.active : ''}
          onClick={() => { handlePageChange(idx) }}
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