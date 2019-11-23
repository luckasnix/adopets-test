import React from 'react'

interface Select {
  id: string;
  label: string;
  value: string;
  changed: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; displayedValue: string; }[];
}

const PetsSelect: React.FunctionComponent<Select> = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <select id={props.id} value={props.value} onChange={props.changed}>
        {props.options.map((cur) => {
          return (
            <option key={cur.value} value={cur.value}>
              {cur.displayedValue}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default PetsSelect