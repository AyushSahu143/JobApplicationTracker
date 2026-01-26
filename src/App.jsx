import './App.css'
import Login from './components/Login/Login'
import AddJobs from './components/AddJobs/AddJobs.jsx'
import Signup from './components/Signup/Signup.jsx'
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import ResetPassword from './components/ResetPassword/ResetPassword.jsx'

function App() {
  
 const route = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "add-job", element: <AddJobs /> }
    ]
  }
])

  return (
   <>
        <RouterProvider router={route} />   
   </>
  )
}

export default App
