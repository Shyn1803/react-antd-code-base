import React, { Suspense } from 'react'
import { Spin } from 'antd'
import { RootRouter } from './routes/index'
// import logo from './logo.svg';

import './App.css'

const App = function () {
  return (
    <Suspense fallback={<Spin size='large' />}>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      <RootRouter />
    </Suspense>
  )
}

export default App
