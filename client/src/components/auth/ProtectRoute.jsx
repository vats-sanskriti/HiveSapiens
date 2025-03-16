// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectRoute = ({children,user,reader="/login"}) => {
//   if(!user) return <Navigate to={redirect}/>;

//   return children ? children :<Outlet/>;
// }

// export default ProtectRoute;


import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectRoute = () => {
  const { user } = useSelector((state) => state.auth); // ✅ Ensure `auth` exists in Redux

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;

