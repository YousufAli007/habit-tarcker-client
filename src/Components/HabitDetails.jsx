 import axios from "axios";
 import React, { useEffect, useState } from "react";
 import { useParams } from "react-router";
 import { toast, ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

 const HabitDetails = () => {
   const [habit, setHabit] = useState(null);
   const { id } = useParams();

   // Fetch habit details
   useEffect(() => {
     axios
       .get(`http://localhost:3000/details/${id}`)
       .then((res) => {
         const habitData = res.data;
         // Ensure streak and completingHistory exist
         setHabit({
           ...habitData,
           streak: habitData.streak || 0,
           completingHistory: habitData.completingHistory || [],
         });
       })
       .catch((err) => console.error(err));
   }, [id]);

   // Handle Mark Complete
   const handleMarkComplete = async () => {
     if (!habit) return;

     const today = new Date().toISOString().slice(0, 10);

     // Client-side check
     if (habit.completingHistory?.includes(today)) {
       toast.info("You already completed this habit today!");
       return;
     }

     try {
       // Optimistic UI update
       setHabit((prev) => ({
         ...prev,
         streak: prev.streak + 1,
         completingHistory: [...(prev.completingHistory || []), today],
       }));

       const res = await axios.put(
         `http://localhost:3000/habits/complete/${id}`
       );

       if (res.data.already) {
         // Already completed in backend
         toast.info(res.data.message);
         setHabit((prev) => ({
           ...prev,
           streak: prev.streak - 1,
           completingHistory: prev.completingHistory.filter((d) => d !== today),
         }));
       } else if (res.data.success) {
         toast.success("Habit marked complete!");
         setHabit((prev) => ({
           ...prev,
           streak: res.data.streak,
         }));
       }
     } catch (err) {
       toast.error("Failed to mark complete. Try again!");
       console.error(err);
       setHabit((prev) => ({
         ...prev,
         streak: prev.streak - 1,
         completingHistory: prev.completingHistory.filter((d) => d !== today),
       }));
     }
   };

   if (!habit)
     return <p className="text-white text-center mt-20">Loading...</p>;

   return (
     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-900/20 to-slate-950 p-6 flex justify-center items-center">
       <ToastContainer />
       <div className="w-full max-w-3xl bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
         {/* Header */}
         <div className="flex items-center gap-4 mb-6">
           <img
             src={habit.image}
             alt="Habit"
             className="w-28 h-28 rounded-3xl object-cover shadow-lg border border-white/10"
           />
           <div>
             <h1 className="text-3xl font-bold text-white mb-1 drop-shadow-md">
               {habit.habitTitle}
             </h1>
             <p className="text-purple-300 text-sm px-3 py-1 rounded-full bg-purple-700/30 inline-block border border-purple-500/30">
               {habit.category}
             </p>
           </div>
         </div>

         {/* Description */}
         <p className="text-gray-300 text-lg leading-relaxed mb-8">
           {habit.description}
         </p>

         {/* Progress Section */}
         <div className="mb-8">
           <div className="flex justify-between text-gray-300 mb-2">
             <span>Progress (Last 30 days)</span>
             <span className="text-white font-semibold">
               {habit.streak ? ((100 / 30) * habit.streak).toFixed(2) : 0} %
             </span>
           </div>
           <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden shadow-inner">
             <div
               style={{
                 width: `${habit.streak ? (100 / 30) * habit.streak : 0}%`,
               }}
               className="h-full bg-purple-500 rounded-full transition-all duration-500"
             ></div>
           </div>
         </div>

         {/* Streak Badge */}
         <div className="flex justify-center mb-8">
           <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg border border-purple-300/30">
             🔥 {habit.streak}-Day Streak
           </div>
         </div>

         {/* Creator Info */}
         <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl border border-white/10 mb-8">
           <h1 className="text-white font-bold text-2xl">Creator :</h1>
           <div>
             <p className="text-white font-bold text-lg">{habit.userName}</p>
             <p className="text-purple-300 text-sm">Pro User</p>
           </div>
         </div>

         {/* Mark Complete Button */}
         <div>
           {habit?.streak < 30 ? (
             <button
               onClick={handleMarkComplete}
               className="w-full py-3 text-lg font-semibold rounded-2xl bg-purple-600 hover:bg-purple-700 text-white shadow-xl transition-all duration-300 active:scale-95"
             >
               Mark Complete
             </button>
           ) : (
             <div className="w-full py-3 text-lg font-semibold rounded-2xl bg-green-600 text-white text-center shadow-xl">
               🎉 Habit Completed! 30-Day Streak Achieved!
             </div>
           )}
         </div>
       </div>
     </div>
   );
 };

 export default HabitDetails;
