import React from 'react'
import ScheduleList from '../Schedule/ScheduleList'
import GoalList from '../Goals/GoalList'
import PremiumCard from '../Cards/PremiumCard'

export default function RightPanel(){
  return (
    <aside className="space-y-6">
      <ScheduleList />
      <GoalList />
      <PremiumCard />
    </aside>
  )
}
