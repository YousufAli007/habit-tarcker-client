import React, { useEffect, useRef, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";

const MyHabit = () => {
  const { user } = useContext(AuthContext);
  const [myhabits, setMyHabits] = useState([]);
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [loading, setLoading] = useState(true); // loader state
  const ref = useRef();

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true); // start loader
    axios
      .get(`http://localhost:3000/all_habits?email=${user.email}`)
      .then((res) => setMyHabits(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false)); // stop loader
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="animate-spin h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full"></div>
        <span className="text-white ml-4 text-lg">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 tracking-tight text-center">
          My Habits
        </h1>

        <div className="backdrop-blur-md bg-white/10 rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  {[
                    "Title",
                    "Category",
                    "Current Streak",
                    "Created Date",
                    "Actions",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-6 py-4 text-xs font-semibold text-purple-200 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {myhabits.length > 0 ? (
                  myhabits.map((habit, idx) => (
                    <tr
                      key={habit._id}
                      className={`border-b border-white/5 hover:bg-white/5 transition-all ${
                        idx % 2 === 0 ? "bg-white/5" : ""
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
                          {habit.streak || 0}{" "}
                          <span className="text-orange-400">🔥</span>
                        </span>
                        {habit.streak >= 30 && (
                          <span className="ml-2 text-green-400 font-semibold">
                            🎉 Max Streak!
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-300">
                        {new Date(habit.created_at).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </td>
                      <td className="px-6 py-5 text-sm font-medium space-x-3 flex flex-wrap">
                        <button
                          onClick={() => setSelectedHabit(habit)}
                          className="text-cyan-400 hover:text-cyan-300 transition"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => console.log("Delete")}
                          className="text-rose-400 hover:text-rose-300 transition"
                        >
                          Delete
                        </button>
                        {(habit.streak ?? 0) < 30 && (
                          <button
                            onClick={() => console.log("Mark complete")}
                            className="text-emerald-400 hover:text-emerald-300 font-bold transition"
                          >
                            Mark Complete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-gray-300">
                      No habits found.
                    </td>
                  </tr>
                )}
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
            <p className="text-center text-gray-300">Modal content here</p>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyHabit;
