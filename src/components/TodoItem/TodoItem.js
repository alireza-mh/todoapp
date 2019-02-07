// @flow

import React, { useState, useEffect, useRef } from 'react'
import './TodoItem.css'

type Props = {
  text?: string,
  done?: boolean,
  onRemove: Function
}

function TodoItem(props: Props) {
  const { text: textProp, done: doneProp, onRemove } = props
  const [text, setText] = useState(textProp)
  const [done, setDone] = useState(doneProp)
  const [editable, setEditable] = useState(false)
  const inputTextRef = useRef(null)

  useEffect(() => {
    if (inputTextRef.current && editable) {
      const elem = inputTextRef.current
      elem.focus()
      elem.selectionStart = elem.selectionEnd
    }
  })

  const handleCheckboxChange = () => {
    setDone(!done)
  }
  const handleTextChange = e => {
    setText(e.target.value)
  }
  const handleTextDblClick = () => {
    setEditable(true)
  }
  const handleTextBlur = () => {
    setEditable(false)
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
      <input
        className='todo-item__textbox'
        value={text}
        type='text'
        ref={inputTextRef}
        readOnly={!editable}
        onChange={handleTextChange}
        onDoubleClick={handleTextDblClick}
        onBlur={handleTextBlur}
      />
      <button
        type='button'
        className='todo-item__remove-button'
        onClick={onRemove}
      >
        &times;
      </button>
    </div>
  )
}

TodoItem.defaultProps = {
  text: 'Doing good stuff',
  done: false
}

export default TodoItem
