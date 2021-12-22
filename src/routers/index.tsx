import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from 'src/pages/Homepage';
import Login from '../pages/auth/Login';
import PageNotFound from '../pages/Errors/PageNotFound';
import PATH from './path';

const RootRouter = React.memo(() => (
  <BrowserRouter>
    <Routes>
      <Route path={PATH.ROOT} element={<Homepage />} />
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.PAGE_NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
))

export default RootRouter
