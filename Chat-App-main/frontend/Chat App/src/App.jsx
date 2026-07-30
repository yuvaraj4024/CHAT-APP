import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Chat from './components/Chat';
import Home from './components/Home';




const App = () => {
  
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"chat",
      element: <Chat />
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App