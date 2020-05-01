import React from 'react';
import style from '../../CSS Modules/home.module.css';
import auc from '../../images/auc.jpg';
import aucbanner from '../../images/emailauclogo.jpg';
import codaisseur from '../../images/codaisseur.jpg';
import mad from '../../images/MAD.jpg';
import foeders from '../../images/foeders.jpg';

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
      <h2 className={style.footer}>A big thank you to our generous sponsors!</h2>
      <br/>
      <div className={style.sponsors}>
        <div className={style.imagediv}>
        <img className={style.logoimg} src={codaisseur} alt='Codaisseur'/>
        </div>

        <div className={style.imagediv}>
        <img className={style.logoimg} src={mad} alt='MAD'/>
        </div>

        <div className={style.imagediv}>
        <img className={style.logoimg} src={foeders} alt='Foeders'/>
        </div>
      </div>
    </div>
  )
}
