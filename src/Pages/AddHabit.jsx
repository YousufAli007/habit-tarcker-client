 import React, { use } from "react";
 import Container from "../Components/Container";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";

 const AddHabit = () => {
  const { user } = use(AuthContext);
  const handleAddHabits =e=>{
    e.preventDefault()
    const reminderTime = e.target.time.value;
    const category = e.target.category.value;
    const habitTitle = e.target.title.value;
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    
    const newHabit = {
      reminderTime,
      category,
      habitTitle,
      userName,
      userEmail,
      image,
      description,
    };
    axios.post(`http://localhost:3000/habits`, newHabit)
    .then(data =>{
      if(data.data.insertedId){
        toast.success('Add Habit Succesfuly')
      };
    });
  }
   return (
     <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900 min-h-screen py-8 md:py-12">
       <Container>
         <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-8 md:mb-10 drop-shadow-lg">
           Add New Habit
         </h1>

         {/* FORM CARD */}
         <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
           <form onSubmit={handleAddHabits} className="space-y-6 md:space-y-8">
             {/* 1. Habit Title & Category */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-200 mb-2">
                   Habit Title
                 </label>
                 <input
                   name="title"
                   type="text"
                   placeholder="e.g., Drink 8 Glasses of Water"
                   className="w-full px-4 py-3.5 rounded-2xl bg-white/15 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-sm md:text-base"
                 />
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-200 mb-2">
                   Category
                 </label>
                 <select
                   name="category"
                   className="w-full px-4 py-3.5 rounded-2xl bg-white/15 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all appearance-none cursor-pointer text-sm md:text-base"
                 >
                   <option value="" className="bg-purple-900 text-white">
                     Choose Category
                   </option>
                   <option value="Morning" className="bg-purple-900 text-white">
                     Morning
                   </option>
                   <option value="Work" className="bg-purple-900 text-white">
                     Work
                   </option>
                   <option value="Fitness" className="bg-purple-900 text-white">
                     Fitness
                   </option>
                   <option value="Evening" className="bg-purple-900 text-white">
                     Evening
                   </option>
                   <option value="Study" className="bg-purple-900 text-white">
                     Study
                   </option>
                 </select>
               </div>
             </div>

             {/* 2. Description & Reminder Time */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-200 mb-2">
                   Description
                 </label>
                 <textarea
                   name="description"
                   rows="3"
                   placeholder="Write a short description..."
                   className="w-full px-4 py-3.5 rounded-2xl bg-white/15 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none text-sm md:text-base"
                 />
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-200 mb-2">
                   Reminder Time
                 </label>
                 <div className="relative">
                   <input
                     name="time"
                     type="time"
                     className="w-full px-4 py-3.5 pr-12 rounded-2xl bg-white/15 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-sm md:text-base"
                   />
                   {/* ICON FIXED: Perfectly aligned */}
                   {/* <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                     <svg
                       className="w-5 h-5 text-gray-300"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                       />
                     </svg>
                   </div> */}
                 </div>
               </div>
             </div>

             {/* 3. Image URL & User Email */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-200 mb-2">
                   Image URL
                 </label>
                 <input
                   name="image"
                   type="url"
                   placeholder="https://i.ibb.co/..."
                   className="w-full px-4 py-3.5 rounded-2xl bg-white/15 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-sm md:text-base"
                 />
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-200 mb-2">
                   User Email
                 </label>
                 <input
                 name="email"
                   type="email"
                   value={user?.email}
                   readOnly
                   className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border border-white/30 text-gray-300 cursor-not-allowed text-sm md:text-base"
                 />
               </div>
             </div>

             {/* 4. User Name & Submit Button */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-end">
               <div>
                 <label className="block text-sm font-medium text-gray-200 mb-2"></label>
                 <input
                   name="name"
                   type="text"
                   value={user?.displayName}
                   readOnly
                   className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border border-white/30 text-gray-300 cursor-not-allowed text-sm md:text-base"
                 />
               </div>

               <div className="flex justify-start md:justify-end">
                 <button
                   type="submit"
                   className="w-full md:w-auto px-8 md:px-10 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition-all text-sm md:text-lg"
                 >
                   Add Habit
                 </button>
               </div>
             </div>
           </form>
         </div>
       </Container>
     </div>
   );
 };

 export default AddHabit;