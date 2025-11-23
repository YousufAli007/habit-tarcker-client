import React, { useEffect, useState } from "react";
import HabitTracker from "../Components/HabitTracker";
import HabitsCard from "../Components/HabitsCard";
import HabitBenefits from "../Components/HabitBenefits";
import ExtraSections from "../Components/ExtraSections";
import Loding from "../Components/Loding";
import Reveal from "../animation/Reveal";
// import { motion } from "motion/react";
// import Reveal from '../animation/Reveal';

const latestHabitPromise = fetch(
  `https://habit-tarcker-server.vercel.app/latest_habit`
).then((res) => res.json());

const Home = () => {
  const [isPreLoading, setIsPreLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (isPreLoading) {
    return <Loding />;
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Reveal>
        <HabitTracker />
      </Reveal>
      {/* <motion.h1 animate={{ x: 500 }} className='text-white'>hello yousuf</motion.h1> */}
      {/* habits card sectin */}

      <Reveal>
        <HabitsCard latestHabitPromise={latestHabitPromise} />
      </Reveal>
      <Reveal>
        <HabitBenefits />
      </Reveal>
      <Reveal>
        <ExtraSections />
      </Reveal>
    </div>
  );
};

export default Home;
