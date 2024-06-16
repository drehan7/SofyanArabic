import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { handleHome } from "./common.js"

const LINKS = {
    "linkedin": "https://www.linkedin.com/in/soufiane-el-mouaffaq-0750101b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "ig": "https://www.instagram.com/soufiane.arabic?igsh=b2toOTR1YnJpZm9w",
    "twitter": "https://x.com/sofyan_arabic?t=gbzspmlQMruZKjSOycQiLA&s=09",
};

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo' onClick={handleHome}>
              SoufianeArabic
            </Link>
          </div>
          <small className='website-rights'>SoufianeArabic © 2024</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link instagram'
              to={{ pathname: LINKS["ig"] }}
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to={{ pathname: LINKS["twitter"] }}
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link linkedin'
              to={{ pathname: LINKS["linkedin"] }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
