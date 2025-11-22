import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router";

// Dummy dynamic data (you will replace with real data later)
// const habit = {
//   title: "Morning Exercise",
//   description: "Start your day with stretching & 10 min jogging.",
//   category: "Morning",
//   image:
//     "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80",
//   completionRate:(100/30)*9,
//   streak: 12,
//   creator: {
//     name: "Yousuf Ali",
//     role: "Pro User",
//     avatar: "https://i.ibb.co/HC5S0Hv/user-2.png",
//   },
// };

const HabitDetails = () => {
  const [habits,setHabit]=useState()
   
  const {id} =useParams()
  useEffect(()=>{
    axios.get(`http://localhost:3000/details/${id}`)
    .then(data =>{
      setHabit(data.data)
    
    });
  },[id])
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-900/20 to-slate-950 p-6 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={habits?.image}
            alt="Habit"
            className="w-28 h-28 rounded-3xl object-cover shadow-lg border border-white/10"
          />

          <div>
            <h1 className="text-3xl font-bold text-white mb-1 drop-shadow-md">
              {habits?.habitTitle}
            </h1>
            <p className="text-purple-300 text-sm px-3 py-1 rounded-full bg-purple-700/30 inline-block border border-purple-500/30">
              {habits?.category}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          {habits?.description}
        </p>

        {/* Progress Section */}
        <div className="mb-8">
          <div className="flex justify-between text-gray-300 mb-2">
            <span>Progress (Last 30 days)</span>
            <span className="text-white font-semibold">
              {((100 / 30) * habits?.streak).toFixed(2)} %
            </span>
          </div>

          <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden shadow-inner">
            <div
              style={{ width: `${(100 / 30) * habits?.streak}%` }}
              className="h-full bg-purple-500 rounded-full"
            ></div>
          </div>
        </div>

        {/* Streak Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg border border-purple-300/30">
            🔥 {habits?.streak}-Day Streak
          </div>
        </div>

        {/* Creator Info */}
        <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl border border-white/10 mb-8">
          {/* <img
            src={habit.creator.avatar}
            alt="Creator"
            className="w-14 h-14 rounded-full border border-white/20 shadow-md object-cover"
          /> */}

          <h1 className="text-white  font-bold text-2xl">Creator :</h1>
          <div>
            <p className="text-white font-bold text-lg">{habits?.userName} </p>
            <p className="text-purple-300 text-sm">pro User</p>
          </div>
        </div>

        {/* Mark Complete Button */}
        <button className="w-full py-3 text-lg font-semibold rounded-2xl bg-purple-600 hover:bg-purple-700 text-white shadow-xl transition-all duration-300 active:scale-95">
          Mark Complete
        </button>
      </div>
    </div>
  );
};

export default HabitDetails;
