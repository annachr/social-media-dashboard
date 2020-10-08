import React from 'react'
import Header from './Header'
import MainDashboard from './MainDashboard'
import OverviewDashboard from './OverviewDashboard'

function Wrapper() {
  return (
    <div className='wrapper'>
      <Header />
      <MainDashboard />
      <OverviewDashboard />
    </div>
  )
}

export default Wrapper;
