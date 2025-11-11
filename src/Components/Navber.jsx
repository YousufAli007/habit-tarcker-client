import React from 'react';
import Container from './Container';
import { Link, NavLink } from 'react-router';

const Navber = () => {
  const 
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addHabit">Add Habit</NavLink>
      </li>
      <li>
        <NavLink to="/publicHabit">Public Habit</NavLink>
      </li>
      <li>
        <NavLink to="/myhabit">My Habit</NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <h1>
              <Link to="/" className="text-[20px] font-bold">
                Habit Tracker
              </Link>
            </h1>
          </div>
          <div className="navbar-center ">
            <ul className="flex space-x-2">{links}</ul>
          </div>
          <div className="navbar-end">
            <div>

            </div>
            <div className='flex gap-2'>
              <Link to="/login">Login</Link>
              <Link to="/register">Regoster</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;