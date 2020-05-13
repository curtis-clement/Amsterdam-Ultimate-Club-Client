import React from 'react';
import style from '../../CSS Modules/gear.module.css';

import darkfront from '../../images/gear/darkjerseyfront.jpg';
import darkback from '../../images/gear/darkjerseyback.jpg';
import darkleftslv from '../../images/gear/darkjerseylslv.jpg';
import darkrightslv from '../../images/gear/darkjerseyrslv.jpg';

export default function Gear() {
  return (
    <main>
      <header>
        <h1 className={style.header}>Order AUC Gear</h1>
        <hr className={style.line} />
      </header>

      <section className={style.info}>
        <div>
          <h3>Please Read About Our Ordering Process</h3>
            <p>
              We are thrilled that you want to order AUC Gear. You don't have to be a
              member of our club to order gear. You can find all of the available gear listed below.
            </p>
            <p>
              Our gear is ordered produced by 9UP Ultimate. We order twice a year - once in the spring
              and once in the fall. The order form will be open during these time period for orders to
              be submitted. If you would like to be notified of when we will be ordering new gear please
              subscribe to our mailing list by click (here - add link to AUC Mailing list form).
              If you would like to see additional pictures of their products you can visit the 
              <a href='https://www.9upultimate.com/'> 9UP website</a>.
            </p>
        </div> 
      </section>
        <div>
          <h3>Dark Jersey</h3>
          <img src={darkfront} alt='Dark Front'/>
          <img src={darkback} alt='Dark Back'/>
          <img src={darkleftslv} alt='Dark Left Sleeve'/>
          <img src={darkrightslv} alt='Dark Right Sleeve'/>
        </div>
      <section>

      </section>
    </main>
  )
}
