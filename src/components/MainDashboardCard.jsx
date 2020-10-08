import React from 'react'

function MainDashboardCard(props) {

  const activityStyle = {
      color: props.activityIcon === 'icon-up' ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)',
      fontWeight: 700,
      fontSize: 14
  }

  const colorLineStyle = {borderTop: props.socialIcon === 'icon-facebook' ? 'hsl(208, 92%, 53%) solid 5px'
      : props.socialIcon === 'icon-twitter' ? 'hsl(203, 89%, 53%) solid 5px'
      : props.socialIcon === 'icon-instagram' ? 'hsl(37, 97%, 70%) solid 5px'
      : 'hsl(348, 97%, 39%) solid 5px'
  }

  return (
    <div style={colorLineStyle} className='maindash Card'>
      <div className='userProfile'>
        <img className='socialIcon' src={require(`../icons/${props.socialIcon}.svg`)} alt="icon"/>
        <p style={{fontWeight: 700}}>{props.user}</p>
      </div>
      <p className='numbers big'>{props.followersNumber}</p>
      <p className='userProfile' style={{fontWeight: 400}}>{props.activity}</p>
      <div style={activityStyle}>
        <img className='activityIcon' src={require(`../icons/${props.activityIcon}.svg`)} alt="icon"/>
        {props.number} Today
      </div>
    </div>
  )
}

export default MainDashboardCard

