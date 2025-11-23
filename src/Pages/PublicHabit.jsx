import React, { useState, useEffect } from "react";
import Container from "../Components/Container";
import { Link } from "react-router-dom"; // ✅ Fixed import

const PublicHabit = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const categories = ["Study", "Evening", "Fitness", "Work", "Morning"];

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const res = await fetch("http://localhost:3000/all_habits");
        const data = await res.json();
        setHabits(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchHabits();
  }, []);

  const filteredHabits = habits.filter((habit) => {
    const matchTitle = habit.habitTitle
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory = category ? habit.category === category : true;
    return matchTitle && matchCategory;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="animate-spin h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full"></div>
        <span className="text-white ml-4 text-lg">Loading...</span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <h1 className="text-3xl font-bold text-white text-center py-4">
        Latest Habits
      </h1>

      <Container>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search habits by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 rounded-xl bg-slate-800 text-white border border-purple-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full sm:w-1/3 px-4 py-2 rounded-xl bg-slate-800 text-white border border-purple-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            <option value="">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
          {filteredHabits.length > 0 ? (
            filteredHabits.map((habit) => (
              <div
                key={habit._id}
                className="bg-gradient-to-br from-slate-800 via-purple-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={habit.image}
                    className="w-full h-full object-cover"
                    alt={habit.habitTitle}
                  />
                </div>

                <div className="p-5">
                  <div className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {habit.category}
                  </div>

                  <h3 className="text-white text-xl font-bold mb-2">
                    {habit.habitTitle}
                  </h3>

                  <p className="text-gray-300 text-sm mb-3">
                    {habit.description}
                  </p>

                  <div className="text-gray-200 text-sm mb-4">
                    <span className="block">Creator:</span>
                    <span className="font-semibold">{habit.userName}</span>
                  </div>

                  <Link
                    to={`/habitDetails/${habit._id}`} // ✅ Fixed path
                    className="btn w-full bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-300 col-span-full">
              No habits found.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PublicHabit;
