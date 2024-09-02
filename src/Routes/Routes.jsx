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
import UpdateBioData from "../Layout/Dashboard/UpdateBioData";
import Payment from "../Layout/Dashboard/Payment/Payment";



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
        {
          path:'payment',
          
          element:<Payment></Payment>
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
          path:'updatebiodata/:id',
          
          element:<AdminRoute><UpdateBioData></UpdateBioData></AdminRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/biodata1/${params.id}`)
          // loader: ({params})=> fetch(`http://localhost:5000/biodata/${params.id}`)
        },
        {
          path:'editbiodata',
          
          element:<AdminRoute><EditBioData></EditBioData></AdminRoute>
        }
      ]
    }
   
  ]);