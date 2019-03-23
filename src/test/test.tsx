import React from 'react'
import ReactDOM from 'react-dom'
import { Div1 } from './div1'
import { Div2 } from './div2'

const App = () => {
  return (
    <div>
      <Div1 init={100} />
      <Div2 init={1} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
