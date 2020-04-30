import React from 'react';
import {Link} from 'react-router-dom';
import style from '../../CSS Modules/aboutus.module.css';
import teampic from '../../images/teampic.jpg';

export default function AboutUs() {
  return (
    <div className={style.body}>
      <div>
        <h1 className={style.header}>About Our Club</h1>
        <hr className={style.line}/>
      </div>

      <container className={style.info}>
        <div className={style.picdiv}>
          <img className={style.teampic} src={teampic} alt='Team' />
        </div>

        <div className={style.infodiv}>
          <h3>Welcome - We are glad you found us!</h3>
          <p>Amsterdam Ultimate Club (Or AUC) is an ultimate frisbee club based in Amsterdam. Founded in 1991 and originally 
            known as Crunch, AUC is the largest ultimate club in The Netherlands with more than 160 members of all age, gender,
            origin, size, and level of play. Throughout the years we have grown from a sports club into a vibrant community within
            this amazing and diverse city we call home.
          </p>
          <br/>
          <p>Besides the largest, we're also one of the most successful clubs in the country! 
            Each year, several of our teams compete at the national level, while our first teams also compete internationally. 
            And to complete the bragging, our club also produces some of the country's brightest talents through its youth program.
          </p>
          <br/>
          <p>
            Apart from Dutch competition, AUC regularly organizes seasonal events such as City League, goaltimate, an annual beach tournament,
            and all kinds of fun events in the city. We welcome playeres of all skill levels and aim to make sure everyone can enjoy
            this amazing sport we love!
          </p>
        </div>
      </container>

      <container className={style.mailing}>
        <div className={style.text}>
            <h4>If you would like details on current AUC happenings please join our mailing list here!</h4>
            <br/>
            <Link to={'/emaillist'}>
              <button className={style.button}>I Want to be Informed!</button>
            </Link>
        </div>
      </container>
    </div>
  )
};
