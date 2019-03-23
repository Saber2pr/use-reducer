export function div2(state: number, action: { type: 'change' }) {
  switch (action.type) {
    case 'change':
      return state === 100 ? 1 : 100
    default:
      return state
  }
}
