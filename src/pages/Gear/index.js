import React from 'react';
import style from '../../CSS Modules/gear.module.css';

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
    </main>
  )
}
