import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import MyContextProvider from './my context/MyContext.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },

    ]
  },
  {
    path: '/dashboard',
    element: <p>Dashboard</p>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/sign-up",
    element: <SignUp></SignUp>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </MyContextProvider>
  </React.StrictMode>,
)
