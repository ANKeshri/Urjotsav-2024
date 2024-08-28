import React from 'react';
import { Outlet } from 'react-router-dom';
import Layer1 from "../src/images/Layer1.jpg";
import Header from './components/Header';

const Layout = () => {
  return (
    <div style={{ backgroundImage: `url(${Layer1})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full h-auto overflow-hidden z-4'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
