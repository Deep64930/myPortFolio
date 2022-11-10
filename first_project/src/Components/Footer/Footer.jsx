import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer__logo'>FullStack Web Developer</a>
    <ul className="permalinks">
      <li><a href='#home'></a>Home</li>
      <li><a href='#about'></a>About</li>
      <li><a href='#services'></a>Services</li>

    </ul>
   </footer>
  )
}

export default Footer