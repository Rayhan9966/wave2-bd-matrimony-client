import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Biodata from "../Pages/Biodata/Biodata";
import AllBiodata from "../Pages/Biodata/AllBiodata";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard/Dashboard";
import View from "../Layout/Dashboard/View";
import ManageUsers from "../Layout/Dashboard/ManageUsers";
import AddBio from "../Layout/Dashboard/AddBio";
import AdminRoute from "./AdminRoute";
import EditBioData from "../Layout/Dashboard/EditBioData";



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

    {
      path: "dashboard",
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        //normal user routes
        {
          path:'view',
          element:<View></View>
        },
        //admin routes
        {
          path:'users',
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path:'addbio',
          
          element:<AdminRoute><AddBio></AddBio></AdminRoute>
        },
        {
          path:'editbiodata',
          
          element:<AdminRoute><EditBioData></EditBioData></AdminRoute>
        }
      ]
    }
   
  ]);