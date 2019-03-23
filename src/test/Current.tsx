import React from 'react'
import { useReducer } from './store/store'
import { current } from './store/current'

export const Current = ({ init }: { init: number }) => {
  const [state, dispatch] = useReducer(current, init)
  return (
    <div>
      current:{state}
      <button onClick={() => dispatch({ type: 'up' })}>up</button>
      <button onClick={() => dispatch({ type: 'down' })}>down</button>
    </div>
  )
}
