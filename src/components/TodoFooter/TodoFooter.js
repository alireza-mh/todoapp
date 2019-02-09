// @flow
import React from 'react'
import './TodoFooter.css'
import TodoFilter from '../TodoFilter'

type Props = {
  activeFilter?: string,
  doneTodoCount: number,
  onFilterClick: Function,
  onClearCompletesClick: Function
}

function TodoFooter(props: Props) {
  const {
    activeFilter,
    doneTodoCount,
    onFilterClick,
    onClearCompletesClick
  } = props

  return (
    <div className='todo-footer'>
      <div>{doneTodoCount} items left</div>
      <div className='todo-filter-section'>
        <TodoFilter
          isActive={activeFilter === 'All'}
          label='All'
          name='todo-filter'
          onClick={onFilterClick}
        />
        <TodoFilter
          isActive={activeFilter === 'Active'}
          label='Active'
          name='todo-filter'
          onClick={onFilterClick}
        />
        <TodoFilter
          isActive={activeFilter === 'Completed'}
          label='Completed'
          name='todo-filter'
          onClick={onFilterClick}
        />
      </div>
      <div>
        <button
          type='button'
          className='clear-button'
          onClick={onClearCompletesClick}
        >
          Clear All Completed
        </button>
      </div>
    </div>
  )
}

TodoFooter.defaultProps = {
  activeFilter: 'All'
}

export default TodoFooter
