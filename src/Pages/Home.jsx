import React, { useEffect, useState }  from 'react';
import HabitTracker from '../Components/HabitTracker';
import HabitsCard from '../Components/HabitsCard';
import HabitBenefits from '../Components/HabitBenefits';
import ExtraSections from '../Components/ExtraSections';
import Loding from '../Components/Loding';
 
 

const latestHabitPromise = fetch(`http://localhost:3000/latest_habit`).then(
  (res) => res.json()
);

const Home = () => {
   const [isPreLoading, setIsPreLoading] = useState(true);

   useEffect(() => {
     const timer = setTimeout(() => {
       setIsPreLoading(false);
     }, 700);

     return () => clearTimeout(timer);
   }, []);

   if (isPreLoading) {
     return <Loding/>;
   }
   
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HabitTracker />
      {/* habits card sectin */}
     

      <HabitsCard latestHabitPromise={latestHabitPromise} />
       
      <HabitBenefits/>
      <ExtraSections/>
    </div>
  );
};

export default Home;