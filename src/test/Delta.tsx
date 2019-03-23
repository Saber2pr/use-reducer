import React from 'react'
import { useReducer } from './store/store'
import { delta } from './store/delta'

export const Delta = ({ init }: { init: number }) => {
  const [state, dispatch] = useReducer(delta, init)
  return (
    <div>
      delta:{state}
      <button onClick={() => dispatch({ type: 'change' })}>change</button>
    </div>
  )
}
