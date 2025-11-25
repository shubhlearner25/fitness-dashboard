import React from 'react';
import ActivityCard from '../components/Cards/ActivityCard';
import StatCard from '../components/Cards/StatCard';
import GoalProgressChart from '../components/Charts/GoalProgressChart';
import FoodTable from '../components/Table/FoodTable';
import Navbar from '../components/Navbar/Navbar';

export default function Overview() {
  return (
    <div>
    <Navbar/>
   
    <div className="space-y-6">

      {/* NAVBAR WILL SHOW NOW */}
   

      <div className="flex items-start gap-6">
        <div className="flex-1 space-y-6">

          <ActivityCard />

          <div className="grid grid-cols-3 gap-4">
            <StatCard type="workout" title="Workout" value="4 hrs" color="teal" />
            <StatCard type="calories" title="Calories" value="1800 kcal" color="orange" />
            <StatCard type="steps" title="Steps" value="2200 steps" color="purple" />
          </div>
        </div>
      </div>

      <GoalProgressChart />

      <FoodTable />
    </div>
    </div>
  );
}
