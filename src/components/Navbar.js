import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          <Link to="/" className='navbar-logo'>
            <img src="/images/sofyan_logo.ico" alt="logo"/>
          </Link>
          )}
          {!logo && (
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SoufianeArabic
          </Link>
          )}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
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
