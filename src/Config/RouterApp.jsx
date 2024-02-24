import React from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,} from "react-router-dom";
import Dashboards from '../Pages/Dashboard';
// import { Login } from '@mui/icons-material';
import Register from '../Pages/Register';
import NotFound from '../Pages/NotFound';
import Logins from '../Pages/Login';
import ProductDetails from '../Components/ProductDetails';

const RouterApp = () => {
    const router=createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path='/dashboard' element={<Dashboards />}/>
                <Route path='/productdetails/:id' element={<ProductDetails />}/>
                <Route path='' element={<Logins />}/>
                <Route path='register' element={<Register />}/>
                <Route path='*' element={<NotFound />}/>
            </Route>
        )
    )
  return (
    <div>
            <RouterProvider router={router} />
    </div>
  )
}

export default RouterApp
