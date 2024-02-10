/* eslint-disable react/require-render-return */
import React from 'react'

import Login from './views/login'

import 'bootswatch/dist/flatly/bootstrap.css'
import './style.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

export default App
