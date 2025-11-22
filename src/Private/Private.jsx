import React, { use } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate } from 'react-router';
import Loding from '../Components/Loding';
 

const Private = ({children}) => {
  const {user,loading}=use(AuthContext)
  if(loading){
    return <Loding/>
  }
  if(!user){
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default Private;