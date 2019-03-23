import React from 'react'
import { useReducer } from './store/store'
import { div2 } from './store/reducer2'

export const Div2 = ({ init }: { init: number }) => {
  const [state, dispatch] = useReducer(div2, init)
  return (
    <div>
      div2:{state}
      <button onClick={() => dispatch({ type: 'change' })}>change</button>
    </div>
  )
}
