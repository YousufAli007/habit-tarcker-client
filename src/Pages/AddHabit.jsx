import React from "react";
import Container from "../Components/Container";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddHabit = () => {
  const { user } = React.useContext(AuthContext);

  const handleAddHabits = async (e) => {
    e.preventDefault();

    const newHabit = {
      habitTitle: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      reminderTime: e.target.time.value,
      userName: e.target.name.value,
      userEmail: e.target.email.value,
      image: e.target.image.value,
      completingHistory: [],
    };

    try {
      const res = await axios.post(
        "https://habit-tarcker-server.vercel.app/habits",
        newHabit
      );
      console.log(res.data); // Check backend response
      if (res.data.insertedId) {
        toast.success("Habit added successfully");
        e.target.reset(); // Reset form
      } else {
        toast.error("Failed to add habit");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

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
                  required
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
                  required
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
                  required
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
                <input
                  required
                  name="time"
                  type="time"
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/15 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-sm md:text-base"
                />
              </div>
            </div>

            {/* 3. Image URL & User Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Image URL
                </label>
                <input
                  required
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
                  value={user?.email || ""}
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
                  value={user?.displayName || ""}
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

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default AddHabit;
