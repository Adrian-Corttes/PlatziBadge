import React from 'react';
import ReactDOM from 'react-dom';
//import BadgeNew from './pages/badgeNew.js'
import Badges from './pages/Badges.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Badges/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

