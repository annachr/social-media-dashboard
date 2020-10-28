import React from 'react'
import Header from './Header'
import MainDashboard from './MainDashboard'
import OverviewDashboard from './OverviewDashboard'
import {ThemeContextConsumer} from '../themeContext'

function Wrapper() {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className={`wrapper ${context.theme}`}>
          <Header />
          <MainDashboard />
          <OverviewDashboard />
        </div>
      )}
    </ThemeContextConsumer>
  )
}

export default Wrapper;
