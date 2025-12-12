import { createBrowserRouter } from "react-router";
import RootLayout from "../layOuts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../layOuts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,   
    children: [
      {
        index: true,
        element: <Home />,    
      }
    ]
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path : 'login',
        element : <Login />
      },
      {
        path: 'registration',
        element : <Register />
      }
    ]
  }

]);
