import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

  const onClick = (e) => {
      let hero = document.getElementById("cards");
      e.preventDefault();
      hero && hero.scrollIntoView({behavior: "smooth", block: "start"});
  }

  return (
      <>
        <article className='hero-container' id="hero">
          <div className="home-background"></div>
          <h1>Soufiane Arabic</h1>
          <p>Learn Arabic At Your Pace</p>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              onClick={onClick}
            >
              Learn More
            </Button>
          </div>
        </article>
      </>
  );
}

export default HeroSection;
