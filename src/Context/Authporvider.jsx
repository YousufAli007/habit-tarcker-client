import React from 'react';
import AuthContext from './AuthContext';

const Authporvider = ({children}) => {
  const contextInfo={

  }
  return <AuthContext value={contextInfo}>
    {children}
    </AuthContext>;
};

export default Authporvider;