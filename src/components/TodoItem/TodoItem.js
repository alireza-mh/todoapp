// @flow

import React, { useState, useEffect, useRef } from 'react'
import './TodoItem.scss'
import type { TodoItemType } from '../../types/todos'

type Props = {
  ...TodoItemType,
  onRemove: Function,
  onChangeText: Function,
  onChangeStatus: Function
}

function TodoItem(props: Props) {
  const { text, done, onRemove, id, onChangeText, onChangeStatus } = props
  const [editable, setEditable] = useState(false)
  const inputTextRef = useRef(null)

  useEffect(() => {
    if (inputTextRef.current && editable) {
      const elem = inputTextRef.current
      elem.focus()
      elem.selectionStart = elem.selectionEnd
    }
  }, [editable])

  const handleCheckboxChange = e => {
    onChangeStatus(id, e.target.checked)
  }
  const handleTextChange = e => {
    onChangeText(id, e.target.value)
  }
  const handleTextDblClick = () => {
    setEditable(true)
  }
  const handleTextBlur = () => {
    setEditable(false)
  }
  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      setEditable(false)
    }
  }

  return (
    <div className={`todo-item ${done ? 'is-done' : ''}`}>
      <label>
        <input
          className='todo-item__checkbox-shadow'
          type='checkbox'
          checked={done}
          onChange={handleCheckboxChange}
        />
        <div className='todo-item__checkbox' />
      </label>
      {editable && (
        <input
          className='todo-item__textbox'
          value={text}
          type='text'
          ref={inputTextRef}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          onBlur={handleTextBlur}
        />
      )}
      {!editable && (
        <div onDoubleClick={handleTextDblClick} className='todo-item__textbox'>
          {text}
        </div>
      )}
      <button
        type='button'
        className='todo-item__remove-button'
        onClick={onRemove.bind(null, id)}
      >
        &times;
      </button>
    </div>
  )
}

export default TodoItem
