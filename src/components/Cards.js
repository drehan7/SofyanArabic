import React from 'react';
import './Cards.css';
import './Button.css';
import { Button } from './Button';
import CardItem from './CardItem';
import { handleAbout, handleContact } from "./common.js"

function Cards() {

  return (
      <>
      <div id="cards"></div>
    <div className='cards'>
      <br/>
      <h1>Classes Fine-Tuned To Your Needs</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              blurb="Set Personal Goals"
              text='Define your objectives for one-on-one online sessions'
              path='/about'
            />
            <CardItem
              blurb='Stay Engaged'
              text='Actively participate in each individual online class'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              blurb='Collaborate on Goals'
              text='Work together to set and adjust objectives as needed'
              path='/about'
            />
            <CardItem
              blurb='Utilize Resources'
              text='Make the most of tools to enhance your individual online learning'
              path='/about'
            />
            <CardItem
              blurb='Track Progress'
              text='Monitor and celebrate achievements in your personalized online classes'
              path='/about'
            />
          </ul>
        </div>
      </div>
          <div className='buttons'>
            <Button
              buttonStyle='btn--test'
              onClick={handleAbout}
            >
              More Info
            </Button>
            <Button
              buttonStyle='btn--test'
              onClick={handleContact}
            >
              Contact Me
            </Button>
          </div>
    </div>
      </>
  );
}

export default Cards;
