import React  from 'react';
import HabitTracker from '../Components/HabitTracker';
import HabitsCard from '../Components/HabitsCard';
 
 

const latestHabitPromise = fetch(`http://localhost:3000/latest_habit`).then(
  (res) => res.json()
);

const Home = () => {
  // console.log(latestHabitPromise);
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HabitTracker />
      {/* habits card sectin */}
     

      <HabitsCard latestHabitPromise={latestHabitPromise} />
       
    </div>
  );
};

export default Home;