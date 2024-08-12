import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Biodata from "../Pages/Biodata/Biodata";
import AllBiodata from "../Pages/Biodata/AllBiodata";
import Login from "../Pages/Login/Login";

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
            element:<AllBiodata></AllBiodata>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
      ]
    },
  ]);