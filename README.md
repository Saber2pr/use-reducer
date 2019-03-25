# @saber2pr/use-reducer

```bash
npm i @saber2pr/use-reducer
```

# API

```ts
export const initState = {
  current: 100,
  delta: 1
}

export const [getState, useReducer] = createStore(state)

// useReducer
const [state, dispatch] = useReducer(reducer, initialState)
// const [state, dispatch] = useReducer(reducer, initialState, initialAction)

// getState
const globalState = getState()
```

# Author

> saber2pr
