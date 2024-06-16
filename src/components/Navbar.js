import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { handleHome, handleAbout, handleContact } from "./common.js";

function Navbar() {
  const [click, setClick] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleClick = () => setClick(!click);

    const _handleHome = (e) => {
        handleHome(e);
        setClick(false);
    }

    const _handleAbout = (e) => {
        handleAbout(e);
        setClick(false);
    }

    const _handleContact = (e) => {
        handleContact(e)
        setClick(false);

    }

  const showLogo = () => {
      if (window.innerWidth <= 960) {
          setLogo(true);
      }
      else {
          setLogo(false);
      }
  }

  useEffect(()=> {
      showLogo();
  }, [])

  window.addEventListener('resize', showLogo);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {logo && (
          <Link to="/" className='navbar-logo' onClick={_handleHome}>
            <img src="/images/sofyan_logo.ico" alt="logo"/>
          </Link>
          )}
          {!logo && (
          <Link to='/' className='navbar-logo' onClick={_handleHome}>
            SoufianeArabic
          </Link>
          )}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={_handleHome}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="/"
                className='nav-links'
                onClick={_handleAbout}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={_handleContact}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
