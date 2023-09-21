import React from 'react';
import {Navigate} from 'react-router-dom';

export default function ProtectedRoute({component: Component, isLoggedIn, ...props}) {
  return (
    isLoggedIn
      ? <Component {...props}/>
      : <Navigate to="/sign-in"/>
  )
}