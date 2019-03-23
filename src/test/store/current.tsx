import { getState } from './store'

export function current(
  state: number,
  action: {
    type: 'up' | 'down'
  }
) {
  switch (action.type) {
    case 'up':
      return state + getState().delta
    case 'down':
      return state - getState().delta
    default:
      return state
  }
}
