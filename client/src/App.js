import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Username from './components/Username'
import Password from './components/Password'
import Recovery from './components/Recovery'
import Profile from './components/Profile'
import PageNotFound from './components/PageNotFount'
import Register from './components/Register'
import Reset from './components/Reset'




const router = createBrowserRouter([
  {
    path:'/',
    element:<Username></Username>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/password',
    element:<Password></Password>
  },
  {
    path:'/recovery',
    element:<Recovery></Recovery>

  },
  {
    path:'/profile',
    element:<Profile></Profile>
  },
  {
    path:'/reset',
    element:<Reset></Reset>
  },
  {
    path:'*',
    element:<PageNotFound></PageNotFound>
  },
])

export default function App() {
  return (
    <main>

  <RouterProvider router={router}></RouterProvider>
    
    </main>
  )
}
