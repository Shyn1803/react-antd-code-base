import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GuestLayout from 'src/layouts/GuestLayout'
import MainLayout from 'src/layouts/MainLayout'
import About from 'src/pages/about'
import Login from 'src/pages/auth/Login'
import PageNotFound from 'src/pages/errors/PageNotFound'
import ServerError from 'src/pages/errors/ServerError'
import Profile from 'src/pages/profile'
import ListSchedule from 'src/pages/schedule/List'
import DetailSchedule from 'src/pages/schedule/Detail'
import { RouteLayout } from '../components/router/RouteLayout'
import Home from '../pages/home'
import PATH from './path'

const RootRouter = React.memo(() => (
  <BrowserRouter>
    <Routes>
      <Route path={PATH.ROOT} element={<Home />}>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path='teams' element={<Teams />}>
          <Route path=':teamId' element={<Team />} />
          <Route path='new' element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
))

export default RootRouter
