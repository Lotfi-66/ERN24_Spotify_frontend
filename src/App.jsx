import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Home from './screens/OnlineScreens/Home'


const App = () => {
  return (
    <>
    <div>App</div>
    <Outlet />
    </>
  )
}

export default App