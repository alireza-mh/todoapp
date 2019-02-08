// @flow
import React from 'react'

type Props = {
  label: string,
  isActive: boolean,
  name: string,
  onClick: Function
}

function TodoFilter(props: Props) {
  const { name, label, isActive, onClick } = props
  return (
    <label className={`todo-filter-label ${isActive ? 'is-active' : ''}`}>
      {label}
      <input
        name={name}
        className='todo-filter-shadow'
        value='all'
        type='radio'
        onClick={onClick.bind(null, label)}
      />
    </label>
  )
}

export default TodoFilter
