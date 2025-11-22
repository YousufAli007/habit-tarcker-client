import React, { use, useState } from "react";
import Container from "../Components/Container";

const habitsPromise = fetch("http://localhost:3000/all_habits").then((res) =>
  res.json()
);

const PublicHabit = () => {
  const habits = use(habitsPromise);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Unique categories
  const categories = [...new Set(habits.map((h) => h.category))];

  // Filtering logic
  const filteredHabits = habits.filter((habit) => {
    const matchTitle = habit.habitTitle
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory = category ? habit.category === category : true;
    return matchTitle && matchCategory;
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <h1 className=" text-3xl font-bold text-white text-center py-4">
        Latest Habits
      </h1>

      <Container>
        {/* 🔍 Search + Category Filter */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search habits by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 rounded-xl bg-slate-800 text-white border border-purple-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          {/* Category Dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full sm:w-1/3 px-4 py-2 rounded-xl bg-slate-800 text-white border border-purple-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            <option value="">All Categories</option>

            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Habit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
          {filteredHabits.map((habit) => (
            <div
              key={habit._id}
              className="bg-gradient-to-br from-slate-800 via-purple-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                <img
                  src="https://i.ibb.co.com/HTtWdkhS/premium-photo-1664477086163-c1c55cfa5c4f.jpg"
                  className="w-full h-full object-cover"
                  alt="habit"
                />
              </div>

              {/* Content */}
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

                <div className="flex items-center mb-4">
                  <div className="text-gray-200 text-sm">
                    <span className="block">Creator:</span>
                    <span className="font-semibold">{habit.userName}</span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    alert("Redirect to habit details (login required)")
                  }
                  className="w-full bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PublicHabit;
