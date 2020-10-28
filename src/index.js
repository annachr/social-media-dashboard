import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ThemeContextProvider} from "./themeContext"
import App from './App';


ReactDOM.render(
  <ThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>,
  document.getElementById('root')
);

