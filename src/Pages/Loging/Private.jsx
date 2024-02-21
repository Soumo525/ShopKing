import React from 'react'
import {Outlet,} from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useAuth } from '../AuthProvider';
export const  Private = () => {
 
   const {user } = useAuth ()
   return user ? <Outlet /> : <Navigate to="/admin"/>;
  
}
