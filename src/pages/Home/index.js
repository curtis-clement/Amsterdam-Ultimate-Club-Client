import React from 'react';
import style from '../../CSS Modules/home.module.css';
import auc from '../../images/auc.jpg';
import AUCLogo from '../../images/auclogo.jpg';

export default function Home() {
  return (
    <div className={style.body}>
      <div>
      <h1 className={style.header}>
        Amsterdam Ultimate Club</h1>
      <hr className={style.line}/>
      </div>
      <div className={style.imagebox}>
        <img 
        className={style.image}
        src={auc} alt='AUC Club' />
      </div>
      <h2 className={style.footer}>Welcome to our club!</h2>
    </div>
  )
}
