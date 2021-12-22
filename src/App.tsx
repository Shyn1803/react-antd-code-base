import React, { Suspense } from 'react';
import { Spin } from 'antd';
import RootRouter from './routers';

import './App.css';

const App = function App() {
  return (
    <Suspense fallback={<Spin size='large' />}>
      <RootRouter />
    </Suspense>
  )
}

export default App
