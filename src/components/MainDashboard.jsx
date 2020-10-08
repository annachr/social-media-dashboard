import React from 'react'
import MainDashboardCard from './MainDashboardCard'
import dashboardData from '../dashboardData'

function MainDashboard() {
  const mainData = dashboardData.map(item =>
    <MainDashboardCard
      key={item.id}
      socialIcon={item.socialIcon}
      user={item.user}
      followersNumber={item.followersNumber}
      activity={item.activity}
      activityIcon={item.activityIcon}
      number={item.number}
    />)
  return(
    <div className='dashboard'>
      {mainData}
      <br />
    </div>
  )
}

export default MainDashboard
