import React, { use } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate } from 'react-router';
 

const Private = ({children}) => {
  const {user,loading}=use(AuthContext)
  if(loading){
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if(!user){
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default Private;