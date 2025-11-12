 import React, { use } from "react";
import Container from "./Container";

 const HabitsCard = ({ latestHabitPromise }) => {
  const habits = use(latestHabitPromise);
   
   return (
     <div className="p-4">
       <Container>
         <h1 className=" text-3xl font-bold text-white text-center py-4">
           Latest Habits
         </h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  my-4">
           {habits.map((habit) => (
             <div
               key={habit._id}
               className="  bg-gradient-to-br from-slate-800 via-purple-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300  "
             >
               {/* Image Section */}
               <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                 <img
                   src="https://i.ibb.co.com/HTtWdkhS/premium-photo-1664477086163-c1c55cfa5c4f.jpg"
                   alt=""
                   className="w-full h-full object-cover"
                 />
               </div>

               {/* Content Section */}
               <div className="p-5">
                 {/* Category Label */}
                 <div className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                   {habit.category}
                 </div>

                 {/* Habit Title */}
                 <h3 className="text-white text-xl font-bold mb-2">
                   {habit.habitTitle}
                 </h3>

                 {/* Description */}
                 <p className="text-gray-300 text-sm mb-3">
                   {habit.description}
                 </p>

                 {/* Creator Info */}
                 <div className="flex items-center mb-4">
                   <div className="text-gray-200 text-sm">
                     <span className="block">Creator:</span>
                     <span className="font-semibold">{habit.userName}</span>
                   </div>
                 </div>

                 {/* View Details Button */}
                 <div>
                   <button
                     className="w-full bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                     onClick={() =>
                       alert("Redirect to habit details (login required)")
                     }
                   >
                     View Details
                   </button>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </Container>
     </div>
   );
 };

 export default HabitsCard;
