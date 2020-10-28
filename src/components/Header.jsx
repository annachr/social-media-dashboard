import React from 'react'
import {ThemeContextConsumer} from "../themeContext"

const Header = () => {

  return(
    <div className='header'>
      <div className='dashboardHeader'>
        <h2>Social Media Dashboard</h2>
        <p className='userProfile'>Total followers: 23,004</p> <br />
        <hr />
      </div>
      <br />
      <div className='modeSwitch'>
        <ThemeContextConsumer>
          {context => (
            <span className='userProfile'>{context.theme === "light" ? "Light" : "Dark"} mode</span>
          )}
        </ThemeContextConsumer>

        <label className="switch">
          <ThemeContextConsumer>
            {context => (
              <input type="checkbox" onChange={context.toggleTheme}/>
            )}
          </ThemeContextConsumer>
            <span className="slider round"> </span>
        </label>
      </div>
      <br />
    </div>
  )
}

export default Header


