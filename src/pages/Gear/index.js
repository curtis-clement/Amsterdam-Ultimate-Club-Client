import React from 'react';
import style from '../../CSS Modules/gear.module.css';

import {DarkJersey} from '../../components/SlideShows';
import {LightJersey} from '../../components/SlideShows';
import {Shorts} from '../../components/SlideShows';

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
              <a className={style.link} href='https://www.9upultimate.com/'> 9UP website</a>.
            </p>
        </div> 

      </section>

      <section className={style.slides}>
        <DarkJersey />
        <LightJersey />
        <Shorts />
      </section>

      <section className={style.slides}>
        <div className={style.formbox}>
        <form className={style.form}>
          <label>Size</label>
            <select>
              <option>Select Size</option>
              <option value={'XS'}>XS</option>
              <option value={'S'}>S</option> 
              <option value={'M'}>M</option>
              <option value={'L'}>L</option> 
              <option value={'XL'}>XL</option>   
            </select> 
          <label>Sex</label>
            <select>
              <option>Select Sex</option>
              <option value={'F'}>F</option>
              <option value={'M'}>M</option>
            </select>
          <label>Quantity</label>
            <input 
            type='number'
            />
          <label>Number</label>
            <input 
            type='text'
            />
          <label>Name On Jersey</label>
            <input 
            type='text'
            />
        </form>
        </div>

        <div className={style.formbox}>
        <form className={style.form}>
          <label>Size</label>
            <select>
              <option>Select Size</option>
              <option value={'XS'}>XS</option>
              <option value={'S'}>S</option> 
              <option value={'M'}>M</option>
              <option value={'L'}>L</option> 
              <option value={'XL'}>XL</option>   
            </select> 
          <label>Sex</label>
            <select>
              <option>Select Sex</option>
              <option value={'F'}>F</option>
              <option value={'M'}>M</option>
            </select>
          <label>Quantity</label>
            <input 
            type='number'
            />
          <label>Number</label>
            <input 
            type='text'
            />
          <label>Name On Jersey</label>
            <input 
            type='text'
            />
        </form>
        </div>

        <div className={style.formbox}>
        <form className={style.form}>
          <label>Size</label>
            <select>
              <option>Select Size</option>
              <option value={'XS'}>XS</option>
              <option value={'S'}>S</option> 
              <option value={'M'}>M</option>
              <option value={'L'}>L</option> 
              <option value={'XL'}>XL</option>   
            </select> 
          <label>Sex</label>
            <select>
              <option>Select Sex</option>
              <option value={'F'}>F</option>
              <option value={'M'}>M</option>
            </select>
          <label>Quantity</label>
            <input 
            type='number'
            />
          <label>Number</label>
            <input 
            type='text'
            />
        </form>
        </div>
      </section>
    </main>
  )
}
