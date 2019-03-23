import { createStore } from '../../core/createStore'

export const initState = {
  current: 100,
  delta: 1
}

export const [getState, useReducer] = createStore(initState)
