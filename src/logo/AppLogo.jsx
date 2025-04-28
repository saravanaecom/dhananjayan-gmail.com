import React from 'react';
import Logo from './logo.png';
const AppLogo = ({ children }) => {
  return (
    <img src={Logo} alt="logo" style={{width: '160px', height: '90px'}}/>
  );
};

export default AppLogo;
