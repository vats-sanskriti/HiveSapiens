import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute = ({children,user,reader="/login"}) => {
  if(!user) return <Navigate to={redirect}/>;

  return children ? children :<Outlet/>;
}

export default ProtectRoute;


