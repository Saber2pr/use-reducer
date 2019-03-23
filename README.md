# @saber2pr/use-reducer

```bash
npm i @saber2pr/use-reducer
```

# API

```ts
const state = {
  div1: 100,
  div2: 1
}

export const [getState, useReducer] = createStore(state)

// useReducer
const [state, dispatch] = useReducer(reducer, initState)

// getState
const globalState = getState()
```

# Author

> saber2pr
