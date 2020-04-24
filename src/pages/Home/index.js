import React from 'react';
import style from '../../CSS Modules/home.module.css';
import auc from '../../images/auc.jpg';
import aucbanner from '../../images/emailauclogo.jpg';

export default function Home() {
  return (
    <div className={style.body}>
      <div>
      <h1 className={style.header}>
        Welcome <img className={style.banner} src={aucbanner} alt='banner' />
      </h1>
      <hr className={style.line}/>
      </div>
      <div className={style.imagebox}>
        <img 
        className={style.image}
        src={auc} alt='AUC Club' />
      </div>
      <h2 className={style.footer}>Where we like to have a dam good time!</h2>
    </div>
  )
}
