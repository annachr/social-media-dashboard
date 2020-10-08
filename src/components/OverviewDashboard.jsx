import React from 'react'
import OverviewDashboardCard from './OverviewDashboardCard'
import overviewData from '../overviewData'

function OverviewDashboard() {
  const overview = overviewData.map(item =>
    <OverviewDashboardCard
      key={item.id}
      activity={item.activity}
      socialIcon={item.socialIcon}
      actionNumber={item.actionNumber}
      activityIcon={item.activityIcon}
      number={item.number}
    />)
  return (
    <div>
      <h2>Overview - Today</h2> <br/>
      <div className='dashboard'>
        {overview}
      </div>
    </div>
  )
}

export default OverviewDashboard
