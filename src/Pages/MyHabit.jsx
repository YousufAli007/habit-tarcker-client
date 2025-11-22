import axios from "axios";
import React, { use, useEffect, useRef, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";

const MyHabit = () => {
  const { user } = use(AuthContext);
  const [myhabits, setMyHabits] = useState(null);
  const [selectedHabit, setSelectedHabit] = useState(null); // ✅ store selected habit
  const ref = useRef();

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`http://localhost:3000/all_habits?email=${user.email}`)
      .then((res) => setMyHabits(res.data))
      .catch((err) => console.error(err));
  }, [user?.email]);

  // ✅ When user clicks update
  const handleUpdate = (habit) => {
    setSelectedHabit(habit); // store which habit we are editing
    ref.current.showModal(); // open modal
  };
  // form update 
 const handleFromUpdate = async (e) => {
   e.preventDefault();

   
   const form = e.target;
   const updatedHabit = {
     habitTitle: form.title.value,
     category: form.category.value,
   };

   try {
     
       await axios.put(
       `http://localhost:3000/habits/${selectedHabit._id}`,
       updatedHabit
     );

      toast.success("Habit updated successfully!");

    
     setMyHabits((prev) =>
       prev.map((habit) =>
         habit._id === selectedHabit._id ? { ...habit, ...updatedHabit } : habit
       )
     );

     ref.current.close(); //  
   } catch (error) {
     toast.error(error)
   }
 };
// delate 
const handleDelete = async (habitId) => {
  try {
    const res = await axios.delete(`http://localhost:3000/habits/${habitId}`);

    if (res.data.success || res.data.deletedCount === 1) {
      toast.success("Habit deleted successfully!");

      // Remove from local state
      setMyHabits((prev) => prev.filter((habit) => habit._id !== habitId));
    } else {
      toast.error(res.data.message || "Failed to delete habit");
    }
  } catch (error) {
    console.error("Delete error:", error);
    toast.error("Failed to delete habit!");
  }
};

const handleMarkComplete = async (habitId) => {
  try {
    const res = await axios.put(
      `http://localhost:3000/habits/complete/${habitId}`
    );

    if (res.data.success) {
      toast.success(res.data.message);

      // Update local state: add today's date to completingHistory
      const today = new Date().toISOString().slice(0, 10);

      setMyHabits((prev) =>
        prev.map((habit) =>
          habit._id === habitId
            ? {
                ...habit,
                completingHistory: [...(habit.completingHistory || []), today],
                streak: (habit.streak || 0) + 1, // increment streak
              }
            : habit
        )
      );
    } else if (res.data.already) {
      toast.info("You already completed this habit today!");
    } else {
      toast.error(res.data.message || "Failed to mark complete");
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong!");
  }
};

 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">
          My Habits
        </h1>

        <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-purple-200 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-purple-200 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-purple-200 uppercase tracking-wider">
                    Current Streak
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-purple-200 uppercase tracking-wider">
                    Created Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-purple-200 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {myhabits?.map((habit, index) => (
                  <tr
                    key={habit._id}
                    className={`border-b border-white/5 transition-all hover:bg-white/5 ${
                      index % 2 === 0 ? "bg-white/5" : ""
                    }`}
                  >
                    <td className="px-6 py-5 text-sm font-medium text-white">
                      {habit.habitTitle}
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
                        {habit.category || "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm">
                      <span className="font-bold text-yellow-400 flex items-center gap-1">
                        {habit.streak || 0}
                        <span className="text-orange-400">🔥</span>
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-gray-300">
                      {new Date(habit.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-5 text-sm font-medium space-x-3">
                      {/* ✅ pass the habit to handleUpdate */}
                      <button
                        onClick={() => handleUpdate(habit)}
                        className="text-cyan-400 hover:text-cyan-300 transition"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(habit._id)}
                        className="text-rose-400 hover:text-rose-300 transition"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleMarkComplete(habit._id)}
                        className="text-emerald-400 hover:text-emerald-300 font-bold transition"
                      >
                        Mark Complete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <dialog
          ref={ref}
          className="modal modal-bottom sm:modal-middle overflow-visible"
        >
          <div className="modal-box overflow-visible bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-800/90 border border-white/10 shadow-2xl backdrop-blur-xl text-white">
            <h3 className="font-bold text-2xl text-purple-300 mb-6 text-center">
              ✨ Update Habit
            </h3>

            {selectedHabit ? (
              <form onSubmit={handleFromUpdate} className="space-y-5">
                <div>
                  <label className="block text-sm text-purple-200 mb-1">
                    Habit Title
                  </label>
                  <input
                    defaultValue={selectedHabit.habitTitle}
                    name="title"
                    className="input input-bordered w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="Enter habit title"
                  />
                </div>

                <div>
                  <label className="block text-sm text-purple-200 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    defaultValue={selectedHabit.category || ""}
                    className="select select-bordered w-full bg-white/10 border-white/20 text-white focus:border-purple-400 z-[9999] "
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="Morning">🌅 Morning</option>
                    <option value="Work">💼 Work</option>
                    <option value="Fitness">💪 Fitness</option>
                    <option value="Evening">🌆 Evening</option>
                    <option value="Study">📚 Study</option>
                  </select>
                </div>

                <div className="modal-action flex justify-between items-center pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => ref.current.close()}
                    className="btn bg-white/10 border border-white/20 text-white hover:bg-white/20"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-transform"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <p className="text-center text-gray-300">Loading...</p>
            )}
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyHabit;
