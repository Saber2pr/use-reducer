import React from 'react'
import ReactDOM from 'react-dom'
import { Current } from './Current'
import { Delta } from './Delta'
import { initState } from './store/store'

const App = () => {
  return (
    <div>
      <Current init={initState.current} />
      <Delta init={initState.delta} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
