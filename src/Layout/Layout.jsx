import React from 'react';
 
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Layout = () => {
  return (
     <div className='flex flex-col h-screen '>
      <header>
      <Navber/>
      </header>
      {/* main */}
      <main className='flex-1'>
      <Outlet/>
      </main>
      {/* footer */}
      <section>
      <Footer/>
      </section>
     </div>
  );
};

export default Layout;