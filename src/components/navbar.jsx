import React from 'react'
import Logo from '../img/logo.svg'
import '../css/Navbar.css'


const Navbar = () => {
   return (
      <div className="Navbar">
         <div className="container-fluid">
            <a className="Navbar__brand" href="/">
               <img className="Navbar__brand-logo " src={Logo} alt="logo" />
               <span className="fw-light">Platzi</span>
               <span className="fw-bold">Conf</span>
            </a>
         </div>
      </div>
   )
}

export default Navbar
