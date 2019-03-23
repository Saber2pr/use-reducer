import { getState } from './store'

export function div1(
  state: number,
  action: {
    type: 'up' | 'down'
  }
) {
  switch (action.type) {
    case 'up':
      return state + getState().div2
    case 'down':
      return state - getState().div2
    default:
      return state
  }
}
