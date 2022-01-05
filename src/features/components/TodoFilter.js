import React from 'react'

export default function TodoFilter(props) {
  return (
    <div>
      <label htmlFor="filter">Filter</label>
      <select
        id="filter"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
