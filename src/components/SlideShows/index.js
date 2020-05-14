import React from 'react';
import {Fade} from 'react-slideshow-image';
import style from '../../CSS Modules/slideshow.module.css';

import darkfront from '../../images/gear/darkjerseyfront.jpg';
import darkback from '../../images/gear/darkjerseyback.jpg';
import darkleftslv from '../../images/gear/darkjerseylslv.jpg';
import darkrightslv from '../../images/gear/darkjerseyrslv.jpg';

import lightfront from '../../images/gear/lightjerseyfront.jpg';
import lightback from '../../images/gear/lightjerseyback.jpg';
import lightleftslv from '../../images/gear/lightjerseylslv.jpg';
import lightrightslv from '../../images/gear/lightjerseyrslv.jpg';

import shortsfront from '../../images/gear/shortsfront.jpg';
import shortsback from '../../images/gear/shortsback.jpg'

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

const shortsImages = [
  shortsfront,
  shortsback
]

const fadeProperties = {
  duration: 5000000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

export const DarkJersey = () => {
  return (
    <div className={style.slidecontainer}>
      <Fade {...fadeProperties}>
        <div className={style.eachfade}>
          <div className={style.imagecontainer}>
            <img src={darkImages[0]} alt='Dark Front'/>
          </div>
        </div>
        <div className={style.eachfade}>
          <div className={style.imagecontainer}>
            <img src={darkImages[1]} alt='Dark Back'/>
          </div>
        </div>
        <div className={style.eachfade}>
          <div className={style.imagecontainer}>
            <img src={darkImages[2]} alt='Left Sleeve'/>
          </div>
        </div>
        <div className={style.eachfade}>
          <div className={style.imagecontainer}>
            <img src={darkImages[3]} alt='Right Sleeve'/>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export const LightJersey = () => {
  return (
    <div className={style.slidecontainer}>
      <Fade {...fadeProperties}>
        <div className={style.eachfade}>
          <div className={style.imagecontainer}>
            <img src={lightImages[0]} alt='Light Front'/>
          </div>
        </div>
        <div className={style.eachfade}>
          <div className={style.imagecontainer}>
            <img src={lightImages[1]} alt='Light Back'/>
          </div>
        </div>
        <div className={style.eachfade}>
          <div className={style.imagecontainer}>
            <img src={lightImages[2]} alt='Left Sleeve'/>
          </div>
        </div>
        <div className={style.eachfade}>
          <div className={style.imagecontainer}>
            <img src={lightImages[3]} alt='Right Sleeve'/>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export const Shorts = () => {
  return (
    <div className={style.slidecontainer}>
      <Fade {...fadeProperties}>
        <div className={style.eachfade}>
          <div className={style.imagecontainer}>
            <img src={shortsImages[0]} alt='Shorts Front'/>
          </div>
        </div>
        <div className={style.eachfade}>
          <div className={style.imagecontainer}>
            <img src={shortsImages[1]} alt='Shorts Back'/>
          </div>
        </div>
      </Fade>
    </div>
  )
}