import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Biodata from "../Pages/Biodata/Biodata";
import AllBiodata from "../Pages/Biodata/AllBiodata";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import PrivateRoutes from "./PrivateRoutes";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/biodata',
            element:<Biodata></Biodata>
        },
        {
            path:'/allbiodata',
            element:<PrivateRoutes>
              <AllBiodata></AllBiodata>
            
            </PrivateRoutes>
            },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        }
      ]
    },
  ]);