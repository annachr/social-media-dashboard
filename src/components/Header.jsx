import React, { useState } from 'react'

function Header() {
  const [mode, setMode] = useState(true)
  const [theme, setTheme] = useState('dark')
  const body = document.getElementById('body')
  body.className=`${theme}`
  let modeType
  mode ? modeType = 'Dark' : modeType = 'Light'

  function handleChange() {
    setMode(!mode)
    mode ? setTheme('light') : setTheme('dark')
  }

  return(
    <div className='header'>
      <div className='dashboardHeader'>
        <h2>Social Media Dashboard</h2>
        <p className='userProfile'>Total followers: 23,004</p> <br />
        <hr />
      </div>
      <br />
      <div className='modeSwitch'>
        <span className='userProfile'>{modeType} mode</span>
        <label className="switch">
          <input type="checkbox" onChange={handleChange} checked={mode}/>
            <span className="slider round"> </span>
        </label>
      </div>
      <br />
    </div>
  )
}

export default Header


