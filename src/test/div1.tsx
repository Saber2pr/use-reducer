import React from 'react'
import { useReducer } from './store/store'
import { div1 } from './store/reducer1'

export const Div1 = ({ init }: { init: number }) => {
  const [state, dispatch] = useReducer(div1, init)
  return (
    <div>
      div1:{state}
      <button onClick={() => dispatch({ type: 'up' })}>up</button>
      <button onClick={() => dispatch({ type: 'down' })}>down</button>
    </div>
  )
}
