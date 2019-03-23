import { createStore } from '../../core/createStore'

const state = {
  div1: 100,
  div2: 1
}

export const [getState, useReducer] = createStore(state)
