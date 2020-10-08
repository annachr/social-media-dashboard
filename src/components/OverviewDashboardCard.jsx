import React from 'react'

function OverviewDashboardCard(props) {

  const activityStyle = {color: props.activityIcon === 'icon-up' ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)', fontWeight: 700}

  return (
    <div className='overviewdash Card'>
      <p className='userProfile'>{props.activity}</p>
      <img src={require(`../icons/${props.socialIcon}.svg`)} alt="icon"/>
      <p className='numbers' style={{fontSize: '1.5rem'}}>{props.actionNumber}</p>
      <p style={activityStyle}><img className='activityIcon' src={require(`../icons/${props.activityIcon}.svg`)} alt="icon"/> {props.number} %</p>
    </div>
  )
}

export default OverviewDashboardCard
