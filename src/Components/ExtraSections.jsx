// ExtraSections.jsx
import React from "react";
import {
  FaCheckCircle,
  FaRegClock,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import Container from "./Container";

const ExtraSections = () => {
  return (
    <Container>
      <div className="  mx-auto w-full py-16 px-6 space-y-24">
        {/* How It Works Section */}
        <section className="text-center bg-slate-800/70 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-gray-300 mb-12">
            Track habits easily and build consistency with these simple steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl">
              <FaCheckCircle className="text-4xl text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Select Habits
              </h3>
              <p className="text-gray-300">
                Choose the habits you want to track daily.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl">
              <FaRegClock className="text-4xl text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Set Reminders
              </h3>
              <p className="text-gray-300">
                Get notifications to stay consistent and on track.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl">
              <FaChartLine className="text-4xl text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Track Progress
              </h3>
              <p className="text-gray-300">
                Monitor your daily streaks and long-term growth.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl">
              <FaUsers className="text-4xl text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Celebrate Wins
              </h3>
              <p className="text-gray-300">
                Reward yourself as you achieve your goals consistently.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="text-center bg-purple-900/70 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">What Users Say</h2>
          <p className="text-gray-300 mb-12">
            Hear from people who transformed their daily routines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
              <p className="text-gray-300 mb-4">
                "This habit tracker helped me stay consistent and finally read
                every day!"
              </p>
              <h4 className="text-white font-semibold">– Sarah L.</h4>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
              <p className="text-gray-300 mb-4">
                "I love the streak feature! It motivates me to stick to my
                goals."
              </p>
              <h4 className="text-white font-semibold">– Mark D.</h4>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
              <p className="text-gray-300 mb-4">
                "Simple, clean, and effective—my productivity has improved a
                lot!"
              </p>
              <h4 className="text-white font-semibold">– Priya S.</h4>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default ExtraSections;
