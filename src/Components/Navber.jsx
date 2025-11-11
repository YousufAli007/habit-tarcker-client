 import React, { use, useState } from "react";
 import Container from "./Container";
 import { Link, NavLink } from "react-router-dom";
 import { RiMenu3Fill } from "react-icons/ri";
 import { IoMdClose } from "react-icons/io";
import AuthContext from "../Context/AuthContext";

 const Navber = () => {
   const [showManue, setShowManue] = useState(false);
  const {user}=use(AuthContext);
  console.log(user)
   
   const links = (
     <>
       <li>
         <NavLink to="/" className="text-purple-300 hover:text-white">
           Home
         </NavLink>
       </li>
       <li>
         <NavLink to="/addHabit" className="text-purple-300 hover:text-white">
           Add Habit
         </NavLink>
       </li>
       <li>
         <NavLink
           to="/publicHabit"
           className="text-purple-300 hover:text-white"
         >
           Public Habit
         </NavLink>
       </li>
       <li>
         <NavLink to="/myhabit" className="text-purple-300 hover:text-white">
           My Habit
         </NavLink>
       </li>
     </>
   );

   return (
     <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-16 shadow-lg">
       <Container>
         <div className="navbar">
           {/* Logo */}
           <div className="navbar-start">
             <h1>
               <Link to="/" className="text-2xl font-bold text-white">
                 Habit Tracker
               </Link>
             </h1>
           </div>

           {/* Desktop Menu */}
           <div className="navbar-center">
             <ul className="menu menu-horizontal flex space-x-2 font-semibold hidden md:flex p-0">
               {links}
             </ul>
           </div>

           {/* Right Side */}
           <div className="navbar-end">
             {/* Mobile Toggle */}
             <div
               className="md:hidden text-white cursor-pointer"
               onClick={() => setShowManue(!showManue)}
             >
               {showManue ? <IoMdClose size={25} /> : <RiMenu3Fill size={25} />}
             </div>

             {/* Auth Buttons - DaisyUI Outline Style */}
             <div className="flex gap-2 ">
               <Link
                 to="/login"
                 className="btn btn-outline btn-sm text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-slate-900
                 font-semibold text-[14px]
                 "
               >
                 Login
               </Link>
               <Link
                 to="/register"
                 className="btn btn-outline btn-sm text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-slate-900
                 font-semibold text-[14px]"
               >
                 Register
               </Link>
             </div>
           </div>
         </div>

         {/* Mobile Menu */}
         <div
           className={`flex justify-center items-center md:hidden bg-slate-800/50  rounded-box p-4 mt-2 border border-purple-500/30 ${
             showManue || "hidden"
           }`}
         >
           <ul
             className={`${
               showManue ? "flex" : "hidden"
             } menu menu-vertical   `}
           >
             {links}
             {/* <div className="flex flex-col gap-2 mt-4">
               <Link
                 to="/login"
                 className="btn btn-outline btn-sm text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-slate-900"
               >
                 Login
               </Link>
               <Link
                 to="/register"
                 className="btn btn-outline btn-sm text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-slate-900"
               >
                 Register
               </Link>
             </div> */}
           </ul>
         </div>
       </Container>
     </div>
   );
 };

 export default Navber;