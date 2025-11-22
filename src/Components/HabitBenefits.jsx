 import React from "react";
 import { FaBrain, FaSmile, FaClock, FaTrophy } from "react-icons/fa";
import Container from "./Container";
import Reveal from "../animation/Reveal";

 const HabitBenefits = () => {
   const benefits = [
     {
       icon: <FaBrain className="text-4xl text-white" />,
       title: "Better Focus",
       description:
         "Improve your concentration and stay on track with daily habits.",
     },
     {
       icon: <FaSmile className="text-4xl text-white" />,
       title: "Reduced Stress",
       description:
         "Cultivate calmness and reduce anxiety through consistent routines.",
     },
     {
       icon: <FaClock className="text-4xl text-white" />,
       title: "Time Management",
       description:
         "Organize your day effectively by sticking to productive habits.",
     },
     {
       icon: <FaTrophy className="text-4xl text-white" />,
       title: "Achieve Goals",
       description:
         "Build momentum and accomplish your personal and professional goals.",
     },
   ];

   return (
    //  <Reveal>
       <Container>
         <div className=" mx-auto w-full bg-slate-800/60 rounded-3xl p-8">
           <h2 className="text-4xl font-bold text-white text-center mb-4">
             Why Build Habits?
           </h2>
           <p className="text-gray-300 text-center mb-12">
             Small daily actions lead to big long-term results.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {benefits.map((benefit, index) => (
               <div
                 key={index}
                 className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
               >
                 <div className="mb-4">{benefit.icon}</div>
                 <h3 className="text-xl font-semibold text-white mb-2">
                   {benefit.title}
                 </h3>
                 <p className="text-gray-300">{benefit.description}</p>
               </div>
             ))}
           </div>
         </div>
       </Container>
    //  </Reveal>
   );
 };
 export default HabitBenefits