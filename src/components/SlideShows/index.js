import React from 'react';
import {Fade} from 'react-slideshow-image';

import darkfront from '../../images/gear/darkjerseyfront.jpg';
import darkback from '../../images/gear/darkjerseyback.jpg';
import darkleftslv from '../../images/gear/darkjerseylslv.jpg';
import darkrightslv from '../../images/gear/darkjerseyrslv.jpg';

import lightfront from '../../images/gear/lightjerseyfront.jpg';
import lightback from '../../images/gear/lightjerseyback.jpg';
import lightleftslv from '../../images/gear/lightjerseylslv.jpg';
import lightrightslv from '../../images/gear/lightjerseyrslv.jpg';

const darkImages = [
  darkfront,
  darkback,
  darkleftslv,
  darkrightslv
]

const lightImages = [
  lightfront,
  lightback,
  lightleftslv,
  lightrightslv
]

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

export const DarkJersey = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={darkImages[0]} alt='Dark Front'/>
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={darkImages[1]} alt='Dark Back'/>
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={darkImages[2]} alt='Left Sleeve'/>
          </div>
          <h2>Third Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={darkImages[3]} alt='Right Sleeve'/>
          </div>
          <h2>Fourth Slide</h2>
        </div>
      </Fade>
    </div>
  )
}

export const LightJersey = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={lightImages[0]} alt='Dark Front'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={lightImages[1]} alt='Dark Back'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={lightImages[2]} alt='Left Sleeve'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={lightImages[3]} alt='Right Sleeve'/>
          </div>
        </div>
      </Fade>
    </div>
  )
}