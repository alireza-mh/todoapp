// @flow
import React, { useState } from 'react'
import './TodoInput.scss'

type Props = {
  onEnterText: Function
}

function TodoInput(props: Props) {
  const { onEnterText } = props
  const [inputText, setInputText] = useState('')

  const handleTextChange = e => {
    setInputText(e.target.value)
  }

  const handleKeyDown = e => {
    const text = inputText.trim()
    if (e.keyCode === 13 && text) {
      onEnterText(text)
      setInputText('')
    }
  }

  return (
    <input
      type='text'
      placeholder='enter new todo...'
      value={inputText}
      onKeyDown={handleKeyDown}
      onChange={handleTextChange}
      className='todo-input'
    />
  )
}

export default TodoInput
