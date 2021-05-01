import React from 'react'
import logo from '../logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            
    <div className="container">
    <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo..."/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={ {color:'#fff'}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>   
        <li className="nav-item">
          <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
          <a className="nav-link" href="#">How Work</a>
                        </li>
                        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        
       
      </ul>
                </div>
                </div>
                
  </nav>
    )
}

export default Navbar
